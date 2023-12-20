import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import HomeHeroBanner from './HomeHeroBanner'
import KumarkomResort from './KumarkomResort'
import KumarkomGallery from './KumarkomGallery'

const index = () => {
    return (
        <>
            <Header />
            <HomeHeroBanner />
            <KumarkomResort />
            <KumarkomGallery />
            <Footer />
        </>
    )
}

export default index