import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'
// import { PhotoAlbum } from 'react-photo-album'
// import { Gallery } from 'react-grid-gallery'

const KumarkomGallery = () => {

    const GalleryImages = [
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_1.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_2.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_3.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_4.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_5.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_6.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_7.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_8.png',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_9.png',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_10.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_11.jpg',
        },
    ]
    return (
        <>
            <Container className='p-0 py-5'>
                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2'>GALLERY</h6>
                </Col>

                {/* <Gallery images={GalleryImages}
                    // rowHeight={380}
                    maxRows={20}
                /> */}

                <Col>
                    <Image src={GalleryImages} alt='' />
                </Col>



                <Col className='d-flex flex-column align-items-center py-4'>
                    <Col md={6} >
                        <Image src='/kumarkom/kumarkom-home/Gallery/zuri_hotel_fssai_certificate.jpeg' alt='' fluid />
                    </Col>
                </Col>


            </Container>
        </>
    )
}

export default KumarkomGallery