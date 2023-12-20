'use client'
import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

import { Player } from 'video-react'


const ZuriBengaluruBanner = () => {
    return (
        <Container className='p-0'>
            <Col>
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src="https://www.thezurihotels.com/wp-content/uploads/videos/the-zuri-whitefield-bengaluru.mp4"
                    muted
                    autoPlay
                />

                <Col className='d-flex flex-row flex-wrap p-0 align-items-center'>

                    <Link href="/"
                        className='text-decoration-none text-black m-0'>
                        <h6 className='mb-0 banner-breadcrumbs'>Home</h6>
                    </Link>

                    / &nbsp;

                    <Link href="/hotels-in-bengaluru/"
                        className='text-decoration-none mb-0'>
                        <h6 className='text-custom-megenta banner-breadcrumbs m-0'>Bengaluru</h6>
                    </Link>
                </Col>
            </Col>
        </Container>
    )
}

export default ZuriBengaluruBanner