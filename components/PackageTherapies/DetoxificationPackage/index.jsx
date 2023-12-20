import React from 'react'

import DetoxificationPackageBanner from './DetoxificationPackageBanner'
import DetoxificationPackageContent from './DetoxificationPackageContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <DetoxificationPackageBanner />
      <DetoxificationPackageContent />
      <Footer />
    </>
  )
}

export default index