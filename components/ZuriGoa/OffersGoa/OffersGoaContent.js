import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'
import Link from 'next/link'


const OffersGoaContent = () => {
    return (
        <>
            <Container className='p-0 py-5 text-center d-md-block d-none'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>BENEFIT FROM OUR SPECIAL OFFERS IN GOA</h6>

                <h6 className='mt-4 pb-0'>STAY OFFERS</h6>
                <Col>
                    <span className='underline-2'></span>
                </Col>

                <Col className='d-md-flex flex-column d-none mt-5'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>MONSOON INDULGENCE</h6>
                            </Col>
                            <p>
                                Package Valid from 1st July’23 to 30th Sept’23
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/monsoon-indulgence/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/goa/offers/monson_in_thub_1.png' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>


                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/goa/offers/monson_maniya_thumb_2.png' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>MONSOON MANIA</h6>
                            </Col>
                            <p>
                                Package Valid from 1st July’23 to 30th Sept’23
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/monsoon-mania/"
                                    className='bg-black text-center rounded-circle text-decoration-none '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Container>
        </>
    )
}

export default OffersGoaContent