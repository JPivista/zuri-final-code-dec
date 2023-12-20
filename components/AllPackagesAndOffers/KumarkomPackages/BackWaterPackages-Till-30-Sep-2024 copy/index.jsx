import React from 'react'

import BackWaterBannerComp from './BackWaterBanner'
import BackWaterContentComp from './BackWaterContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <BackWaterBannerComp />
      <BackWaterContentComp />
      <Footer />
    </>
  )
}

export default index