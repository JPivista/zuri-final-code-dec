import React from 'react'

import ZuriGoaRoomSuitesHeader from './ZuriGoaRoomSuitesHeader'
import ZuriGoaRoomSuitesBanner from './ZuriGoaRoomSuitesBanner'
import ZuriGoaRoomSuitesSlider from './ZuriGoaRoomSuitesSlider'
import ZuriGoaRoomSuitesContent from './ZuriGoaRoomSuitesContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <ZuriGoaRoomSuitesHeader />
      <ZuriGoaRoomSuitesBanner />
      <ZuriGoaRoomSuitesContent />
      <ZuriGoaRoomSuitesSlider />
      <Footer />
    </>
  )
}

export default index