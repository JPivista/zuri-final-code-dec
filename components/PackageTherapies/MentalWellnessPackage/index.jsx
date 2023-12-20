import React from 'react'

import MentalWellnessBanner from './MentalWellnessBanner'
import MentalWellnessContent from './MentalWellnessContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <MentalWellnessBanner />
      <MentalWellnessContent />
      <Footer />
    </>
  )
}

export default index