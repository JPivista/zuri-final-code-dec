import React from 'react'

import GetAwayBannerComp from './GetAwayBanner'
import GetAwayContentComp from './GetAwayContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <GetAwayBannerComp />
      <GetAwayContentComp />
      <Footer />
    </>
  )
}

export default index