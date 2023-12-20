import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

import '../../../custom.css'

const MonSoonManiaContent = () => {
    return (
        <Container className='p-md-0 p-2'>

            <Col className='text-center pb-3 px-md-5'>
                <Image src='/cl.png' alt='' />
                <h6 className='text-decoration-underline text-black py-3'>MONSOON INDULGENCE PACKAGE</h6>
                <p>
                    Package Valid from 1st July’23 to 30th Sept’23.
                </p>
                <p className='mt-3'>
                    Note:- Considering the safety and health of our valuable guests, we strictly follow central government guidelines for COVID – 19
                </p>
            </Col>

            {/* Table 1 */}
            <Col className='d-flex overflow-scroll'>
                <table class="table table-bordered text-center">
                    <thead className='w-100'>
                        <tr>
                            <th scope="col">
                                <p className='text-custom-grey mb-0'>Room Type</p>
                            </th>
                            <th scope="col">
                                <p className='text-custom-grey mb-0'>Superior Garden View</p>
                            </th>
                            <th scope="col">
                                <p className='text-custom-grey mb-0'>Premium Pool View</p>
                            </th>
                            <th scope="col">
                                <p className='text-custom-grey mb-0'>Deluxe Garden View</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <p className='text-custom-grey mb-0' >
                                    Double room per night
                                </p>
                            </th>
                            <td>
                                <p className='text-custom-grey mb-0'>
                                    INR 14,499 +tax
                                </p>
                            </td>
                            <td>
                                <p className='text-custom-grey mb-0'>
                                    INR 15,499 +tax
                                </p>
                            </td>
                            <td>
                                <p className='text-custom-grey mb-0'>
                                    INR 16,499 +tax
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4}>
                                <p className='text-danger mb-0' >
                                    Above rates are per room per night on double occupancy and exclusive of applicable government tax of 18%
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>

            <Col className='py-3'>
                <h6 className='text-black'>INCLUSIONS FOR ALL THE ABOVE PACKAGES</h6>

                <ul>
                    <li>Minimum length of stay 3 nights and 4 days on double occupancy</li>
                    <li>Dabolim Airport or Margao Railway station hotel transfers by air-conditioned vehicle. Transfers from and to Mopa will have an additional supplement of INR 2000+tax Per Way</li>
                    <li>Welcome drink on arrival</li>
                    <li>Centrally air conditioned contemporary rooms with tea/coffee maker ,in-room safe</li>
                    <li>Bottle of Goan wine in the room on arrival</li>
                    <li>Buffet Breakfast; Lunch & Dinner per night of stay at Waterfalls Café</li>
                    <li>Evening Tea</li>
                    <li>Complimentary wireless internet (maximum 3 devices per room)</li>
                    <li>Complimentary use of Swimming Pool</li>
                    <li>Benefits at Deltin Zuri Casino – Get an Entry Discount of Rs. 500 and aadditional Rs. 500 worth chips on purchase of Premium and VIP passes</li>
                    <li>Happy Hours at Tangerine Bar from 16:00 Hrs to 19:00 Hrs</li>
                    <li>15% Discount on recreational activities & the beauty salon (Conditions Apply)</li>
                </ul>

                <h6 className='text-black ps-md-4'>NOTE:-</h6>
                <ul className='ps-md-5'>
                    <li>Single Occupancy – INR 1000/- reduction per night on the double occupancy rate</li>
                </ul>
            </Col>

            <Col className='pb-3'>
                <h6 className='text-black'>CHILD POLICY</h6>
                <ul>
                    <li>Two children below 6 years or one child below 12 years will be complimentary with existing bedding. Extra Bed if required will be at INR 2000/- (tax inclusive) per night.</li>
                    <li>Additional Child meal supplement at INR 1000/- per child per night. Extra Bed at INR 2000/- (tax inclusive ) per night</li>
                    <li>12 years and above will be considered as an adult and will be charged 30% on the double occupancy rate. Rate is inclusive of Extra Bed.</li>
                    <li>Maximum Occupants per room – Two adults and two children below 12 years or 3 adults</li>
                </ul>
            </Col>

            <Col className='pb-3'>
                <h6 className='text-black'>TERMS & CONDITIONS:</h6>
                <ul>
                    <li>Above rate is exclusive of currently applicable tax and it is subject to change without prior notice at the sole discretion of the Government</li>
                    <li>Hotel terms and conditions apply</li>
                    <li>Offer may be withdrawn/extended within a 24 Hour Notice at the sole discretion of the hotel.</li>
                    <li>Our Check-in time is 3:00 pm and check-out is 11:00am</li>
                </ul>
            </Col>

            <Col className='pb-3'>
                <h6 className='text-black'>CANCELLATION POLICY :</h6>
                <ul>
                    <li>Reservation must be cancelled 07 days prior to the planned date of arrival for no cancellation charges.</li>
                    <li>Cancellation within 07 days to 48 hours of arrival will attract 50% retention charges of the full stay</li>
                    <li>within 48 hours or a no-show; hotel reserves the right to charge for the entire duration of the stay.</li>
                </ul>
            </Col>

        </Container>
    )
}

export default MonSoonManiaContent