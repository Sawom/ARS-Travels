import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bannar from '../Bannar/Bannar';
import FAQ from '../FAQ/FAQ';
import Menues from '../Menues/Menues';

const Home = () => {
    return (
        <div >
                <Row   >
                    {/* bannar */}
                    <Col lg="8" md='8' >
                        <Bannar></Bannar>
                    </Col>
                    {/* menues */}
                    <Col lg="4" md='4'  >
                        <Menues></Menues>
                    </Col>
                </Row> 
                <br /> <br />
                <FAQ></FAQ>
        </div>
    );
};

export default Home;