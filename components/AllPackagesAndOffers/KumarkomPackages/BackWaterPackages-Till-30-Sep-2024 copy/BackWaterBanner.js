import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

import '../../../custom.css'

const HoneyMoonBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/all_package_img/Backwater_banner.png')`,
        height: 466,
        backgroundSize: 'cover'
    }

    return (
        <Container className='p-0 w-100 custom-kumarkom-menu-container' style={{}}>

            <h3 className='text-center py-md-4 text-custom-grey '>
                BACKWATER PACKAGE
            </h3>

            <Col className='p-0'
                // style={{ backgroundImage: "url(/kumarkom/room_suites_kumarkom_banner.jpg)", height: '460px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                style={BannerImg}
            >
            </Col>

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >

                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 banner-breadcrumbs'>Home</h6>
                </Link>
                /
                <Link href="/lake-resorts-in-kumarakom"
                    className='text-decoration-none mb-0'>
                    <h6 className='banner-breadcrumbs mb-0 text-black'>Lake Resorts In Kumarakom</h6>
                </Link>
                /
                <Link href="/lake-resorts-in-kumarakom/offers/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta banner-breadcrumbs mb-0'>Offers</h6>
                </Link>
            </Col>

        </Container >
    )
}

export default HoneyMoonBanner