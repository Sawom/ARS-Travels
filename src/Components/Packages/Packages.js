import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SinglePackages from '../SinglePackages/SinglePackages';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/packages')
        .then(res=> res.json())
        .then(data => {
            setPackages(data)
        } )
    } ,[] )

    // searching 
    useEffect( ()=>{
        getPackages();
    } , [] );

    const getPackages = async () =>{
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setPackages(result);
    }

    const handleSearch = async (event)=>{
        let key = event.target.value;
        if(key){  
            let result = await fetch(`http://localhost:5000/search/${key}`) ;
            result = await result.json();
            if(result){
                setPackages(result)
            }
        } 
        else{
            getPackages();
        }
    } 
    // end

    return (
        <div className='container'>
            <br /> <br />
            <div className=''>
                
                <input className='searchStyle  App' onChange={handleSearch}  placeholder='Search Destination Here' type="text"  ></input>
                <br />
            </div>
            {/* showing packages */}
            <Row className='part2' xs={1} sm={1} md={3} lg={3} >
                {
                    packages.length > 0 ?
                    packages.map(pkg => <SinglePackages
                        key={pkg._id} pkg={pkg}
                    ></SinglePackages> )
                    : <h5>No Result Found</h5>
                }
            </Row>
            
        </div>
    );
};

export default Packages;