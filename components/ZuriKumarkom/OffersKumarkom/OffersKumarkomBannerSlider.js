'use client'

import { Col, Container, Image } from 'react-bootstrap'

import Carousel from 'react-bootstrap/Carousel';

import '../../custom.css'

import '../../custom-slider.css'
import Link from 'next/link';

const OffersKumarkomBannerSlider = () => {

    const BannerImg = {
        backgroundImage: `url('/kumarkom/offers/offers_banner_1.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }

    const BannerImg1 = {
        backgroundImage: `url('/kumarkom/offers/offers_banner_2.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }

    return (
        <>
            <Container className='p-0 pt-4 text-center px-md-5'>
                <Carousel style={{ height: 460 }}>
                    <Carousel.Item className='bg-black' style={BannerImg}>
                        <Carousel.Caption>
                            <Col
                                className='bg-opacity-50 bg-black float-end offers-slider-bgcustom d-flex flex-column align-items-start justify-content-center ps-5'
                                md={4} style={{ height: 460 }}>
                                <h5 className='text-white'>THE LAST MINUTE DEAL</h5>
                                <span className='border border-1 w-100 my-2'></span>
                                <p className='text-white'>15% OFF On BAR Rates</p>
                                <p className='text-white'>15% Discount on Spa treatment</p>
                                <p className='text-white'>15% on Food & Soft Beverages</p>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='bg-danger' style={BannerImg1} >
                        <Carousel.Caption>
                            <Col
                                className='bg-opacity-50 bg-black float-end offers-slider-bgcustom d-flex flex-column align-items-start justify-content-center ps-5'
                                md={4} style={{ height: 460 }}>
                                <h5 className='text-white'>THE WELL-IN-ADVANCE DEAL</h5>
                                <span className='border border-1 w-100 my-2'></span>
                                <p className='text-white'>30% OFF on BAR Rates</p>
                                <p className='text-white'>20% Discount on Spa treatment</p>
                                <p className='text-white'>15% on Food & Soft Beverages</p>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

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
                    <Link href="/lake-resorts-in-kumarakom/maya-spa/"
                        className='text-decoration-none mb-0'>
                        <h6 className='text-custom-megenta banner-breadcrumbs mb-0'> Maya Spa, Kerala</h6>
                    </Link>
                </Col>
            </Container>
        </>
    )
}

export default OffersKumarkomBannerSlider