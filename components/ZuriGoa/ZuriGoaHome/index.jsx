import React from 'react'

import ZuriGoaHomeHeader from './ZuriGoaHomeHeader'
import ZuriGoaBanner from './ZuriGoaBanner'
import ZuriGoaContent from './ZuriGoaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <ZuriGoaHomeHeader />
      <ZuriGoaBanner />
      <ZuriGoaContent />
      <Footer />
    </>
  )
}

export default index