import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

import '../../../custom.css'

const EventsMeetingBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/kumarkom/events/kumarakom_meeting_banner.jpg')`,
        height: 600,
        backgroundSize: 'cover'
    }

    return (
        <Container className='p-0 w-100' style={{}}>

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
                <Link href="/lake-resorts-in-kumarakom/events/"
                    className='text-decoration-none mb-0'>
                    <h6 className=' banner-breadcrumbs mb-0 text-black'>Events</h6>
                </Link>
                /
                <Link href="/lake-resorts-in-kumarakom/events/meetings/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta banner-breadcrumbs mb-0'> Meeting</h6>
                </Link>
            </Col>
        </Container >
    )
}

export default EventsMeetingBanner