import React from 'react'

import RejuvenationPackageBanner from './RejuvenationPackageBanner'
import RejuvenationPackageContent from './RejuvenationPackageContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <RejuvenationPackageBanner />
      <RejuvenationPackageContent />
      <Footer />
    </>
  )
}

export default index