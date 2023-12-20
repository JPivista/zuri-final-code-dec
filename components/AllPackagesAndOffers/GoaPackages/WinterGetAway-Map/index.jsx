import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import WinterApBanner from './Winter-Map-Banner'
import WinterApContent from './Winter-Map-Content'

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