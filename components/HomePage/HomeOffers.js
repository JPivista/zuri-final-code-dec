import Link from 'next/link'
import React from 'react'

import { Col, Container, Image, Row } from 'react-bootstrap'

import Carousel from 'react-multi-carousel';

import '../custom.css'


const HomeOffers = () => {

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

            {/* Mobile View */}
            <Container className='p-0 d-md-none d-flex flex-column mt-5'>
                <Col className='d-flex flex-column align-items-center' >
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2'>OFFERS</h6>
                </Col >
                <Carousel className=''
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "desktop"]}
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                // autoPlay={true}
                >
                    <Col className='border border-1 shadow-sm p-0'>
                        <Image src="/home/weekend_package.jpg" alt='' width="100%" height={340} />
                        <Col className='p-2 pb-0'>
                            <div className='arrow-up'></div>
                            <h6 className='text-black'>
                                WEEKEND PACKAGES
                            </h6>
                            <p className='p-0 m-0'>
                                Spend a weekend nestled in the lap of luxury, at any of our luxury properties. Choose from the Summer Family Package, the Honeymoon Package in Goa, or the Honeymoon Package in Kumarakom.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start align-items-center p-0 pe-2 pb-2'>
                            <Link
                                href="/offers/stay-offers/"
                                className='bg-black text-center text-decoration-none text-center btn-circle d-flex flex-column justify-content-center'
                            >
                                <p className=' mb-0 font11px lh-sm text-center text-white'>VIEW<br /> OFFER</p>
                            </Link>
                        </Col>
                    </Col>

                    <Col className='border border-1 shadow-sm p-0'>
                        <Image src="/home/wellness_package.jpg" alt='' width="100%" height={340} />
                        <Col className='p-2 pb-0'>
                            <h6 className='text-black'>
                                WELLNESS
                                <br />
                                PACKAGES
                            </h6>
                            <p>
                                Discover a new you, when you partake of our wellness packages here at the Zuri.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link
                                href="/offers/ayurveda-package/"
                                className='bg-black text-center text-decoration-none text-center btn-circle d-flex flex-column justify-content-center'
                            >
                                <p className=' mb-0 font11px lh-sm text-center text-white'>
                                    VIEW
                                    <br />
                                    OFFER
                                </p>
                            </Link>
                        </Col>
                    </Col>

                    <Col className='border border-1 shadow-sm p-0'>
                        <Image src="/home/dinning_offers.jpg" alt='' width="100%" height={340} />
                        <Col className='p-2 pb-0'>
                            <h6 className='text-black'>DINING
                                <br />
                                OFFERS</h6>
                            <p>
                                A true treat for the taste buds, our signature dishes will leave you asking for more.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link href="/offers/dining-offers/"
                                className='bg-black text-center text-decoration-none text-center btn-circle d-flex flex-column justify-content-center'
                            >
                                <p className=' mb-0 font11px lh-sm text-center text-white'>
                                    VIEW
                                    <br />
                                    OFFER
                                </p>
                            </Link>
                        </Col>
                    </Col>

                    <Col className='border border-1 shadow-sm p-0'>
                        <Image src="/home/stay_offers.jpg" alt='' width="100%" height={340} />
                        <Col className='p-2 pb-0'>
                            <h6 className='text-black'>STAY
                                <br />
                                OFFERS</h6>
                            <p>
                                Revel in luxury, with our STAY OFFERS at the Zuri property of your choice!
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link href="/offers/stay-offers/"
                                className='bg-black text-center text-decoration-none text-center btn-circle d-flex flex-column justify-content-center'
                            >
                                <p className=' mb-0 font11px lh-sm text-center text-white'>
                                    VIEW
                                    <br />
                                    OFFER
                                </p>
                            </Link>
                        </Col>
                    </Col>

                    <Col className='border border-1 shadow-sm p-0'>
                        <Image src="/home/honeymoon_package.jpg" alt='' width="100%" height={340} />
                        <Col className='p-2 pb-0'>
                            <h6 className='text-black'>HONEYMOON
                                <br />
                                PACKAGES
                            </h6>
                            <p>
                                The Zuri strives to make sure you have an unforgettable experience while you stay here.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link
                                href="/lake-resorts-in-kumarakom/offers/honeymoon-package/"
                                className='bg-black text-center text-decoration-none text-center btn-circle d-flex flex-column justify-content-center align-items-center'
                            >
                                <p className=' mb-0 font11px lh-sm text-center text-white'>
                                    VIEW
                                    <br />
                                    OFFER</p>
                            </Link>
                        </Col>
                    </Col>
                </Carousel>
            </Container >



            {/* Desktop View */}
            <Container className='p-0 d-md-flex d-none flex-column gap-2'>
                <Col className='d-flex flex-column align-items-center' >
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2'>OFFERS</h6>
                </Col >

                <Row className='p-0 gap-1'>
                    <Col md={4} className='border border-1 shadow-sm p-0'>
                        <Image src="/home/weekend_package.jpg" alt='' width="100%" />
                        <Col className='p-2 pb-0'>
                            <div className='arrow-up'></div>
                            <h6>
                                WEEKEND PACKAGES
                            </h6>
                            <p className='p-0 m-0'>
                                Spend a weekend nestled in the lap of luxury, at any of our luxury properties. Choose from the Summer Family Package, the Honeymoon Package in Goa, or the Honeymoon Package in Kumarakom.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link href="/offers/stay-offers/"
                                className='bg-black text-center text-decoration-none btn-circle'
                            >
                                <p className=' mb-0 font11px lh-sm text-white'>VIEW<br /> OFFER</p>
                            </Link>
                        </Col>
                    </Col>


                    <Col className='d-flex flex-md-row flex-column gap-3'>
                        <Col className='d-flex flex-column gap-3'>
                            <Col className='d-flex flex-row border border-1 shadow-sm'>
                                <Col className='p-2'>
                                    <h6>WELLNESS PACKAGES</h6>
                                    <p>
                                        Discover a new you, when you partake of our wellness packages here at the Zuri.
                                    </p>
                                </Col>
                                <Col className='d-flex justify-content-center align-items-md-start position-absolute vobtn'>
                                    <Link href="/offers/stay-offers/"
                                        className='bg-black text-center text-decoration-none btn-circle'
                                    >
                                        <p className=' mb-0 font11px lh-sm text-white'>VIEW<br /> OFFER</p>
                                    </Link>
                                </Col>
                                <Col>
                                    <Image src='/home/wellness_package.jpg' alt='' width="100%" />
                                </Col>
                            </Col>
                            <Col className='d-flex flex-row border border-1 shadow-sm'>
                                <Col className='p-2'>
                                    <h6>DINING OFFERS</h6>
                                    <p>
                                        A true treat for the taste buds, our signature dishes will leave you asking for more.
                                    </p>
                                </Col>
                                <Col>
                                    <Image src='/home/dinning_offers.jpg' alt='' width="100%" height="100%" />
                                </Col>
                                <Col className='d-flex justify-content-center align-items-md-start position-absolute vobtn'>
                                    <Link href="/offers/dining-offers/"
                                        className='bg-black text-center text-decoration-none btn-circle'
                                    >
                                        <p className=' mb-0 font11px lh-sm text-white'>VIEW<br /> OFFER</p>
                                    </Link>
                                </Col>
                            </Col>
                        </Col>

                        <Col className='d-flex flex-md-row flex-column'>
                            <Col className='d-flex flex-column gap-3'>
                                <Col className='d-flex flex-row border border-1 shadow-sm'>
                                    <Col className='p-2'>
                                        <h6>STAY OFFERS</h6>
                                        <p>
                                            Revel in luxury, with our STAY OFFERS at the Zuri property of your choice!
                                        </p>
                                    </Col>
                                    <Col>
                                        <Image src='/home/stay_offers.jpg' alt='' width="100%" />
                                    </Col>
                                    <Col className='d-flex justify-content-center align-items-md-start position-absolute vobtn-1'>
                                        <Link href="/offers/stay-offers/"
                                            className='bg-black text-center text-decoration-none btn-circle'
                                        >
                                            <p className=' mb-0 font11px lh-sm text-white'>VIEW<br /> OFFER</p>
                                        </Link>
                                    </Col>
                                </Col>
                                <Col className='d-flex flex-row border border-1 shadow-sm'>
                                    <Col className='p-2'>
                                        <h6>HONEYMOON PACKAGES</h6>
                                        <p>
                                            The Zuri strives to make sure you have an unforgettable experience while you stay here.
                                        </p>
                                    </Col>
                                    <Col className='d-flex justify-content-center align-items-md-start position-absolute vobtn-1'>
                                        <Link href="/lake-resorts-in-kumarakom/offers/honeymoon-package/"
                                            className='bg-black text-center text-decoration-none btn-circle'
                                        >
                                            <p className=' mb-0 font11px lh-sm text-white'>VIEW<br /> OFFER</p>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Image src='/home/honeymoon_package.jpg' alt='' width="100%" />
                                    </Col>
                                </Col>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default HomeOffers