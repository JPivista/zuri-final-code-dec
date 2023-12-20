
import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const PropertiesSlider = () => {

    // const viewCircle = {
    //     fontSize: "11px !important",
    //     height: 30,
    //     width: 30
    // }

    return (
        <>
            <Container className='p-0'>

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
            </Container >

        </>
    )
}

export default PropertiesSlider