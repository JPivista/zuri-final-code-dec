
import Link from 'next/link'
import React from 'react'

import { Col, Container, Image, Row } from 'react-bootstrap'

import Carousel from 'react-multi-carousel';

const PropertiesSlider = () => {

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
            {/* Desktop View */}
            <Container className='p-0 d-md-flex flex-column d-none '>
                {/* Desktop View */}
                <Row className='p-0 d-flex flex-row'>
                    <Col className='d-flex flex-column border border-2 border-light-subtle p-0 m-2'>
                        <Col>
                            <Image src='/home/kumarakom_properties_comp.jpg' alt='' width="100%" />
                        </Col>
                        <Col className='d-flex flex-row p-3'>
                            <Col md={9}>
                                <h6 className='text-black'>THE ZURI KUMARAKOM, KERALA RESORT & SPA</h6>
                                <p>
                                    Nestled in God’s Own Country, on the banks of the picturesque Vembanad Lake, The Zuri Kumarakom, a luxury hotel, resort and spa, offers an 18-acre paradise for travelers to relax and unwind in.
                                </p>
                            </Col>
                            <Col className='d-flex flex-column align-items-center justify-content-center'>
                                <Link href="/lake-resorts-in-kumarakom/"
                                    className='d-inline-block bg-black  text-decoration-none text-white btn-circle'
                                >
                                    <p
                                        className='mb-0 text-white lh-1 font11px d-flex flex-column align-items-center justify-content-center' >
                                        VIEW
                                        <br />
                                        More
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-column border border-2 border-light-subtle p-0 m-2'>
                        <Col>
                            <Image src='/home/zuri_goa_facade_main_page.jpg' alt='' width="100%" />
                        </Col>
                        <Col className='d-flex flex-row p-3'>
                            <Col md={9}>
                                <h6 className='text-black'>THE ZURI WHITE SANDS, GOA RESORT & CASINO</h6>
                                <p>
                                    A truly picturesque and scenic beach at Varca, in South Goa, with a backdrop of the Arabian Sea, is the home of The Zuri White Sands Resort in Goa.
                                </p>
                            </Col>
                            <Col className='d-flex flex-column align-items-center justify-content-center'>
                                <Link href="/beach-resorts-in-goa/"
                                    className='d-inline-block bg-black text-decoration-none text-white btn-circle'
                                >
                                    <p className='mb-0 text-white lh-1 font11px d-flex flex-column align-items-center justify-content-center' >
                                        VIEW
                                        <br />
                                        More
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-column border border-2 border-light-subtle p-0 m-2'>
                        <Col>
                            <Image src='/home/kumarakom_properties_comp.jpg' alt='' width="100%" />
                        </Col>
                        <Col className='d-flex flex-row p-3'>
                            <Col md={9}>
                                <h6 className='text-black'>THE ZURI WHITEFIELD, BENGALURU</h6>
                                <p>
                                    Located ideally in the Silicon Valley of India, The Zuri Whitefield is strategically located around 45 minutes away from the International Airport, and 2 minutes away from the International Technology Park (ITPB).
                                </p>
                            </Col>
                            <Col className='d-flex flex-column align-items-center justify-content-center'>
                                <Link href="/hotels-in-bengaluru/"
                                    className='d-inline-block bg-black  text-decoration-none text-white btn-circle'
                                >
                                    <p
                                        className='mb-0 text-white lh-1 font11px d-flex flex-column align-items-center justify-content-center'
                                    >
                                        VIEW
                                        <br />
                                        More
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Container>

            {/* Mobile View */}
            <Container className='p-0 d-md-none d-flex flex-column'>
                <Carousel className=''
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "desktop"]}
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                // autoPlay={true}
                >
                    <Col className='border border-1 shadow-sm p-0'>
                        <Image src='/home/kumarakom_properties_comp.jpg' alt='' width="100%" />
                        <Col className='p-2 pb-0'>
                            <div className='arrow-up'></div>
                            <h6 className='text-black'>
                                THE ZURI KUMARAKOM, KERALA RESORT & SPA
                            </h6>
                            <p className='p-0 m-0'>
                                Nestled in God’s Own Country, on the banks of the picturesque Vembanad Lake, The Zuri Kumarakom, a luxury hotel, resort and spa, offers an 18-acre paradise for travelers to relax and unwind in.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start align-items-center p-0 pe-2 pb-2'>
                            <Link
                                href="/lake-resorts-in-kumarakom/"
                                className='bg-black text-decoration-none btn-circle'
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
                        <Image src='/home/zuri_goa_facade_main_page.jpg' alt='' width="100%" />
                        <Col className='p-2 pb-0'>
                            <h6
                                className='text-black'
                            >
                                THE ZURI WHITE SANDS, GOA RESORT & CASINO
                            </h6>
                            <p>
                                A truly picturesque and scenic beach at Varca, in South Goa, with a backdrop of the Arabian Sea, is the home of The Zuri White Sands Resort in Goa.
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link
                                href="/beach-resorts-in-goa/"
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
                        <Image src="/home/dinning_offers.jpg" alt='' width="100%" height={305} />
                        <Col className='p-2 pb-0'>
                            <h6 className='text-black'>
                                THE ZURI WHITEFIELD, BENGALURU
                            </h6>
                            <p>
                                Located ideally in the Silicon Valley of India, The Zuri Whitefield is strategically located around 45 minutes away from the International Airport, and 2 minutes away from the International Technology Park (ITPB).
                            </p>
                        </Col>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2 pb-2'>
                            <Link
                                href="/hotels-in-bengaluru/"
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


                </Carousel>
            </Container >

        </>
    )
}

export default PropertiesSlider