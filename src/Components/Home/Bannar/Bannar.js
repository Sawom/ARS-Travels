import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../images/bannar/bandorban.jpg';
import Banner2 from '../../../images/bannar/coxs.jpg';
import Banner3 from '../../../images/bannar/sundarban.jpg';


const Bannar = () => {
    return (
        <div>
            <Carousel fade>
                {/* 1 */}
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner1} alt="First slide" />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* 2 */}
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner2} alt="Second slide" />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* 3 */}
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner3} alt="Third slide" />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Bannar;