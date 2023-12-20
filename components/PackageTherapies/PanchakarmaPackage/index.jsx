import React from 'react'

import PanchakarmaPackageBanner from './PanchakarmaPackageBanner'
import PanchakarmaPackageContent from './PanchakarmaPackageContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <PanchakarmaPackageBanner />
      <PanchakarmaPackageContent />
      <Footer />
    </>
  )
}

export default index