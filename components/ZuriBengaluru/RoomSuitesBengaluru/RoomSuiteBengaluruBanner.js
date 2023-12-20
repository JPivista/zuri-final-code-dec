import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

const RoomSuiteBengaluruBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/bengaluru/room-suites/room_suites_bangaluru_banner.jpg')`,
        height: 466,
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

                <Link href="/hotels-in-bengaluru"
                    className='text-decoration-none mb-0'>
                    <h6 className=' banner-breadcrumbs m-0 text-black'>Bengaluru</h6>
                </Link>
                /
                <Link href=""
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta banner-breadcrumbs m-0'>Rooms & Suites</h6>
                </Link>
            </Col>

        </Container >
    )
}

export default RoomSuiteBengaluruBanner