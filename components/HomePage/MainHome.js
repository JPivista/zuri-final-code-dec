'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';

// import '../Style'

import '../custom.css'

const MainHome = () => {

    return (
        <>

            <Container className='p-0'>
                <Container className='p-0 my-5 d-flex flex-column align-items-center  gap-3'>

                    <Image src='/cl.png' alt='' fluid className='text-center' />

                    <h6>ZURI PROPERTIES</h6>

                    <p className='text-md-center text-start px-md-5 mx-md-3'>
                        The Zuri is the personification of a Premium, Luxury and Lifestyle, International chain of Hotels & Resorts. Zuri Hotels & Resorts, an eclectic collection of resorts, comprises of a premium luxury hotel in Whitefield, a beautiful resort in Kumarakom and a postcard like beach resort destination in South Goa. Each property has its unique personality, but the objective is common. To give you, our guest, an unparalleled experience when it comes to comfort and convenience.
                    </p>

                </Container>
            </Container>
        </>

    )
}

export default MainHome