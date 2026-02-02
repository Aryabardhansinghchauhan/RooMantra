import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    
    // req.user comes from the 'protect' middleware we fixed above
    const owner = req.user._id; 

    // Check if user Already Registered a hotel
    const hotel = await Hotel.findOne({ owner });
    if (hotel) {
      return res.json({ success: false, message: "Hotel Already Registered" });
    }

    // Create the hotel
    await Hotel.create({ name, address, contact, city, owner });

    // ✅ FIX 3: Changed comma (,) to semicolon (;)
    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    res.json({ success: true, message: "Hotel Registered Successfully" });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};