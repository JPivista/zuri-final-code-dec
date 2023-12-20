'use client'

import React from 'react'
import MainHome from './MainHome'

import Header from '../Shared/HeaderHome'
import Footer from '../Shared/Footer'
import SliderBanner from './SliderBanner'

import PropertiesSlider from './PropertiesSlider'
import HomeOffers from './HomeOffers'
import Gallery from './Gallery'


import '../StyledComponents'

const index = () => {
  return (
    <>

      <Header />
      <SliderBanner />
      <MainHome />
      <PropertiesSlider />
      <HomeOffers />
      <Gallery />
      <Footer />
    </>
  )
}

export default index