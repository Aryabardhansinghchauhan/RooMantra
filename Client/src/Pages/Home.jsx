import React from 'react'
import H from '../Component/H'
import FeaturedDestination from '../Component/FeaturedDestination'
import ExclusiveOffers from '../Component/ExclusiveOffers'
import Testinomial from '../Component/Testinomial'
import NewsLetter from '../Component/NewsLetter'

const Home = () => {
  return (
    <div>
      <H />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testinomial />
      <NewsLetter/>
    </div>
  )
}

export default Home