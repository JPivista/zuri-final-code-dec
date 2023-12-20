import React from 'react'

import Header from '../../components/Shared/Header'
import Footer from '../../components/Shared/Footer'
import ContactUsBanner from './ContactUsBanner'
import ContactUsTap from './ContactUsTap'

const index = () => {
    return (
        <>
            <Header />
            <ContactUsBanner />
            <ContactUsTap />
            <Footer />
        </>
    )
}

export default index