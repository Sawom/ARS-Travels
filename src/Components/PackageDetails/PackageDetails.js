import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaCarSide } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const PackageDetails = () => {
    const {id} = useParams();
    const [ pack, setPack] = useState({});
    useEffect( ()=>{
        fetch(`http://localhost:5000/packages/${id}`)
        .then(data => data.json())
        .then(data => setPack(data))
    } , [])

    return (
        <div className='my-4  '  >
            <div className='App container mx-auto p-4  h-100 cardStyless' >
                <Card.Img className='w-100' variant="top" src={pack.img1} />
                <Card.Body className='pStyle' >
                    <br />
                    <h5>Package Code : {pack.code} </h5>
                    <h5> {pack.name} </h5>
                    <h6>Package Price : {pack.price} Taka per person </h6>
                    <h6>Tour Type : {pack.tourType} </h6>
                    <h6> Duration : {pack.duration} </h6>
                    <h6>Location : {pack.location} </h6>
                    <h4 className='text-success' >DAY WISE ITINERARY</h4>
                    <p> <b> {pack.dayOneTitle} </b> </p>
                    <p> {pack.dayOneText} </p>
                    <p> <b> {pack.dayTwoTitle} </b> </p>
                    <p> {pack.dayTwoText} </p>
                    <p> <b> {pack.dayThreeTitle} </b> </p>
                    <p> {pack.dayThreeText} </p>
                    <p> <b> {pack.dayFourTitle} </b> </p>
                    <p> {pack.dayFourText} </p>
                    <p> <b> {pack.dayFiveTitle} </b> </p>
                    <p> {pack.dayFiveText} </p>
                    <Link as={Link} to="/shipment" >
                        <Button size='sm' variant='success'  > <FaCarSide></FaCarSide> Book Now</Button>
                    </Link>
                </Card.Body>
            </div>
        </div>
    );
};

export default PackageDetails;