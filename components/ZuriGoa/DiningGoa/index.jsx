import React from 'react'

import DiningGoaHeader from './DiningGoaHeader'
import DiningGoaBanner from './DiningGoaBanner'
import DiningGoaContent from './DiningGoaContent'
import DiningGoaSlider from './DiningGoaSlider'
import DiningGoaOffers from './DiningGoaOffers'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <DiningGoaHeader />
      <DiningGoaBanner />
      <DiningGoaContent />
      <DiningGoaSlider />
      <DiningGoaOffers />
      <Footer />
    </>
  )
}

export default index