import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'

import '../../../StyledComponents'

import CottageBanner from './CottageBanner'
import CottageContent from './CottageContent'




const index = () => {
  return (
    <>
      <Header />
      <ZuriSharedHeader />
      <CottageBanner />
      <CottageContent />
      <ZuriSharedSlider />
      <Footer />
    </>
  )
}

export default index