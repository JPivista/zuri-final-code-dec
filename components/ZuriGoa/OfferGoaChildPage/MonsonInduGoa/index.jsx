import React from 'react'

import SharedOffersGoaHeader from '../SharedOffersGoaHeader'
import MonsonInduGoaBanner from './MonsonInduGoaBanner'
import MonsonInduGoaContent from './MonsonInduGoaContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedOffersGoaHeader />
      <MonsonInduGoaBanner />
      <MonsonInduGoaContent />
      <Footer />
    </>
  )
}

export default index