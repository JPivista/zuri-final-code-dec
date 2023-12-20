import React from 'react'

import Header from '../../../../components/Shared/Header'
import Footer from '../../../../components/Shared/Footer'

import WinterApBanner from './WinterApBanner'
import WinterApContent from './WinterApContent'

import '../../../StyledComponents'

const index = () => {
    return (
        <>
            <Header />
            <WinterApBanner />
            <WinterApContent />
            <Footer />
        </>
    )
}

export default index