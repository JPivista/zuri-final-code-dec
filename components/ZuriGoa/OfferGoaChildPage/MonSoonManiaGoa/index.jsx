import React from 'react'

import SharedOffersGoaHeader from '../SharedOffersGoaHeader'
import MonsoonManiaBanner from './MonsoonManiaBanner'
import MonSoonManiaContent from './MonSoonManiaContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedOffersGoaHeader />
      <MonsoonManiaBanner />
      <MonSoonManiaContent />
      <Footer />
    </>
  )
}

export default index