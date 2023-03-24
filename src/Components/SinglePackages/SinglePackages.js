import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SinglePackages.css';
import { Link, useNavigate  } from 'react-router-dom';
import { FcViewDetails } from 'react-icons/fc';

const SinglePackages = ({pkg}) => {
    const {_id, code,name, duration, price, img} = pkg;
    const url = `/packinfo/${_id}` ;
    let navigate = useNavigate();

    const handleView = ()=>{
        navigate(url);
    }

    return (
        <div className='my-3'>
            <Card className='container p-2  h-100 cardStyless' >
                <Card.Img className='w-100' variant="top" src={img} />
                <Card.Body>
                    <h5>Package Code: {code} </h5>
                    <h6 className='text-success'> {name} </h6>
                    <h6> BDT {price} per person </h6>
                    <p>{duration}</p>
                    <Button size='sm' onClick={handleView} > <FcViewDetails></FcViewDetails>  View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SinglePackages;