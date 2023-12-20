import React from 'react'

import WeigthManagementBanner from './WeigthManagementBanner'
import WeigthManagementContent from './WeigthManagementContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <WeigthManagementBanner />
      <WeigthManagementContent />
      <Footer />
    </>
  )
}

export default index