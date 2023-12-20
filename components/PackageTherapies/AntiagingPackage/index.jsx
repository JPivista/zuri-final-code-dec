import React from 'react'

import AntiagingPackageBanner from './AntiagingPackageBanner'
import AntiagingPackageContent from './AntiagingPackageContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <AntiagingPackageBanner />
      <AntiagingPackageContent />
      <Footer />
    </>
  )
}

export default index