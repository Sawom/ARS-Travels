import React from 'react';
import { Accordion, Row } from 'react-bootstrap';
import Fimg from '../../../images/faq.png';

const FAQ = () => {
    return (
        <div className='container' >
            <h3 className='App' >Frequently Asked Questions</h3>
            <div className='cardStyless '>
                <br />
                <Row xs={1} sm={1} md={2} lg={2} >
                {/* images */}
                <div >
                    <img className="w-100" src={Fimg} alt="" />
                </div>
                {/* questions */}
                    <div>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span className='text-success' > <b> Why Travel with ARS Travels? </b>  </span> </Accordion.Header>
                                <Accordion.Body className='pStyle' >
                            No one else in the industry offers our combination of quality
                                hotels, small group sizes, and culturally immersive itineraries
                                for the tour price we charge. In fact, the most common refrain 
                                from our travelers is that they can't believe they received 
                                so much for what they paid. You may find what seems like a 
                                similar tour at a lower price with one of our competitors, 
                                but when you compare feature-for-feature, we believe it's 
                                clear our tour offers more value for your money. When it 
                                comes to international travel, high-quality value can truly be 
                                the difference between a good tour and an incredible one. 
                                We include airfare, Hotel, Transfer, Sightseeing, and English-speaking
                                guide in almost all of our Packages. Our tours always feature high-quality,
                                centrally located hotels for Our Packages.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <span className='text-success' > <b> Customer Help 24/7 </b>  </span> </Accordion.Header>
                                <Accordion.Body className='pStyle' >
                                Our customer service is legendary. We're passionate about travel
                                and we love helping you put together a journey you'll remember 
                                for a lifetime. Our reservation Team & Sales Team are there to 
                                help you throughout the whole booking. Once you're on your trip,
                                we have a dedicated emergency line that is manned 24/7, not by 
                                an answering service, but by our Head of Team to know what to 
                                do to help you (even if it's in the middle of the night). 
                                When you book your tour with Amazing Tours, you have a team 
                                watching out for you no matter where you go.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Row>
            </div>
            
        </div>
    );
};

export default FAQ;