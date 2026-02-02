import User from "../models/User.js";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
  try {
    // ✅ FIX 1: Use req.auth() as a function (Clerk v5+ syntax)
    const { userId } = req.auth();

    if (!userId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    // Find the user by the Clerk ID stored in the User._id field
    let user = await User.findById(userId);

    if (!user) {
      console.log(`ℹ️ User with Clerk ID ${userId} not found. Creating minimal user record.`);
      // Create a minimal user document to avoid 404s until webhook runs
      user = await User.create({ _id: userId, username: "Clerk User", _email: "", image: "" });
    }

    req.user = user;
    next();

  } catch (error) {
    console.log("Middleware Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};