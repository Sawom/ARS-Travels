import React from 'react';
import { Figure, Row } from 'react-bootstrap';
import Des1 from '../../../images/destination/cox.jpg';
import Des2 from '../../../images/destination/kuakata.jpg';
import Des3 from '../../../images/destination/rangamati.jpg';
import Des4 from '../../../images/destination/sajek.jpeg';
import Des5 from '../../../images/destination/sundarban.jpg';
import Des6 from '../../../images/destination/sylhet.jpg';

const Destinations = () => {
    return (
        <div className='container' >
            <h2 className='App' >Top Destinations</h2>
            <br />
            <Row lg={3} md={2} sm={1} className='cardStyless ' >
                {/* 1 */}
                <Figure >
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Des1}
                    />
                    <Figure.Caption>
                       <b>Cox'x Bazar</b> 
                    </Figure.Caption>
                </Figure>
                {/* 2 */}
                <Figure className=''>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Des2}
                    />
                    <Figure.Caption>
                       <b> Kuakata </b> 
                    </Figure.Caption>
                </Figure>
                {/* 3 */}
                <Figure className=''>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Des3}
                    />
                    <Figure.Caption>
                       <b> Rangamati </b> 
                    </Figure.Caption>
                </Figure>
                {/* 4 */}
                <Figure className=''>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Des4}
                    />
                    <Figure.Caption>
                       <b> Sajek </b> 
                    </Figure.Caption>
                </Figure>
                {/* 5 */}
                <Figure className=''>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Des5}
                    />
                    <Figure.Caption>
                       <b> Sundarban </b> 
                    </Figure.Caption>
                </Figure>
                {/* 6 */}
                <Figure className=''>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={Des6}
                    />
                    <Figure.Caption>
                       <b> Sylhet </b> 
                    </Figure.Caption>
                </Figure>
            </Row>
        </div>
    );
};

export default Destinations;