import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'

import '../../../StyledComponents'
import PoolVillaBanner from './PoolVillaBanner'
import PoolVillaContent from './PoolVillaContent'

const index = () => {
  return (
    <>
      <Header />
      <ZuriSharedHeader />
      <PoolVillaBanner />
      <PoolVillaContent />
      <ZuriSharedSlider />
      <Footer />
    </>
  )
}

export default index