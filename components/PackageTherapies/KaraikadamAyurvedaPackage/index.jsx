import React from 'react'

import KaraikadamAyurvedaBanner from './KaraikadamAyurvedaBanner'
import KaraikadamAyurvedaContent from './KaraikadamAyurvedaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <KaraikadamAyurvedaBanner />
      <KaraikadamAyurvedaContent />
      <Footer />
    </>
  )
}

export default index