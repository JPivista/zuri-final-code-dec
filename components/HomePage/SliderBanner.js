
'use client'

import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './home-slider.css'

const SliderBanner = () => {

    const BannerImg = {
        backgroundImage: `url('/home/zuri_slider_banner_1.jpg')`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',

    }

    const BannerImg1 = {
        backgroundImage: `url('/home/zuri_slider_banner_2.jpg')`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    }

    const BannerImg2 = {
        backgroundImage: `url('/home/zuri_slider_banner_3.jpg')`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    }

    return (
        <>
            <Container fluid className='p-0 text-center position-relative'>
                <Carousel>
                    <Carousel.Item className='bg-black ' style={BannerImg}>
                        <Carousel.Caption className='w-100 p-0'>
                            <Col className='text-center w-100 position-relative d-flex' style={{ height: '100vh', }}>
                                <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                    <h1 className='text-white custom-home-slider-text p-3'>
                                        TROPICAL DESTINATION
                                    </h1>
                                </Col>
                                <Col className='position-absolute bg-black bg-opacity-75 pb-0 bottom-0 end-0'>
                                    <h6 className='mb-0 p-2'>
                                        The Zuri White Sands, Goa Resort & Casino
                                    </h6>
                                </Col>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='bg-black ' style={BannerImg1}>
                        <Carousel.Caption className='p-0'>
                            <Col className='text-center w-100 position-relative d-flex' style={{ height: '100vh', }}>
                                <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                    <h1 className='text-white custom-home-slider-text'>
                                        GOD’S OWN COUNTRY
                                    </h1>
                                </Col>
                                <Col className='position-absolute bg-black bg-opacity-75 bottom-0 end-0'>
                                    <h6 className='mb-0 p-2'>
                                        The Zuri Kumarakom, Kerala Resort & Spa
                                    </h6>
                                </Col>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='bg-black ' style={BannerImg2}>
                        <Carousel.Caption className='p-0'>
                            <Col className='text-center w-100 position-relative d-flex' style={{ height: '100vh', }}>
                                <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                    <h1 className='text-white custom-home-slider-text'>
                                        PREFERRED BUSINESS <br />
                                        DESTINATION
                                    </h1>
                                </Col>
                                <Col className='position-absolute bg-black bg-opacity-75 p-2 pb-0 bottom-0 end-0'>
                                    <h6 className='mb-0 p-2'>
                                        The Zuri Whitefield, Bengaluru
                                    </h6>
                                </Col>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default SliderBanner