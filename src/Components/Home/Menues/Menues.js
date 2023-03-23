import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebook, FaWhatsapp , FaYoutube , FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Menues.css'

const Menues = () => {
    return (
        <div className='container mt-4'>
            <div>
                <h5> Find Us On</h5>
                <ListGroup className='mt-4'>
                    <ListGroup.Item variant="secondary" className='mb-2 listStyle' > <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
                    <ListGroup.Item variant="secondary" className='mb-2 listStyle' > <FaWhatsapp></FaWhatsapp> WhatsApp </ListGroup.Item>
                    <ListGroup.Item variant="secondary" className='mb-2 listStyle' > <FaYoutube></FaYoutube> Youtube </ListGroup.Item>
                    <ListGroup.Item variant="secondary" className='mb-2 listStyle' > <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                    <ListGroup.Item variant="secondary" className='mb-2 listStyle' > <FaLinkedin></FaLinkedin> LinkedIn </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Menues;