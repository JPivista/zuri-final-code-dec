'use client'
import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';

import '../../../custom.css'

const ComplimentaryAmenitiesSlider = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 0 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 0 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <Container className='p-0 pt-4 text-center' style={{}}>

                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>THE ZURI KUMARAKOM, KERALA RESORT & SPA – COMPLIMENTARY AMENITIES</h6>
                <p className='text-center'>
                    The Zuri Kumarakom, Kerala Resort & Spa provides you with the finest quality of services whether you are on a family holiday, a personal retreat or conducting business. We ensure that your stay is comfortable and that all your needs, the amenities you expect and the extras you deserve are delivered with the highest quality standards.
                </p>
                <Col className='px-md-5'>
                    <Carousel className=''
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "desktop"]}
                        swipeable={false}
                        draggable={false}
                        showDots={true}

                    >
                        <Col className='text-center d-flex flex-column align-items-center gap-4 ps-lg-5 ms-lg-4' >
                            <Image src='/kumarkom/complimentary-amenities/ca_thumb_1.jpg' alt='' roundedCircle width={180} height={180} />
                            <p>
                                Hi-tea at Lime Tree
                                <br />
                                in the evening
                            </p>
                        </Col>
                        <Col className='text-center d-flex flex-column align-items-center gap-4 px-lg-4' >
                            <Image src='/kumarkom/complimentary-amenities/ca_thumb_2.jpg' alt='' roundedCircle width={180} height={180} />
                            <p>
                                Fishing in the lagoon between 09:00 am – 06:00 pm
                            </p>
                        </Col>
                        <Col className='text-center d-flex flex-column align-items-center gap-4 pe-lg-5 me-lg-5'>
                            <Image src='/kumarkom/complimentary-amenities/ca_thumb_3.jpg' alt='' roundedCircle width={180} height={180} />
                            <p>
                                Complimentary use of Gym, Sauna, Jacuzzi & Steam bath 09:00 am – 06:00 pm
                            </p>
                        </Col>
                        <Col className='text-center pt-md-2 d-flex flex-column align-items-center gap-4'>
                            <Image src='/kumarkom/complimentary-amenities/ca_thumb_4.jpg' alt='' roundedCircle width={180} height={180} />
                            <p>
                                A Kerala cultural program in the evening at
                                <br />
                                our exclusive amphitheatre, Natya
                            </p>
                        </Col>
                    </Carousel>
                </Col>
            </Container>
        </>
    )
}

export default ComplimentaryAmenitiesSlider