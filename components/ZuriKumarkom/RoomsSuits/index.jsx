import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import RoomsSuitsHeader from './RoomsSuitsHeader'
import RoomsSuitsContent from './RoomsSuitsContent'
import RoomSuitesBanner from './RoomSuitesBanner'
import RoomSuitesSlider from './RoomSuitesSlider'

const index = () => {
  return (
    <>
      <Header />
      <RoomsSuitsHeader />
      <RoomSuitesBanner />
      <RoomsSuitsContent />
      <RoomSuitesSlider />
      <Footer />
    </>
  )
}

export default index