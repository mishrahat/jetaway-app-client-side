import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://howling-wizard-23242.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div className='container'>
            <h1 className='title package-heading text-center'>Enjoy Your Dream Trip!</h1>
            <div style={{ marginTop: '100px' }} className='services'>
                {
                    packages.map(country => <Service
                        key={country._id}
                        country={country}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;