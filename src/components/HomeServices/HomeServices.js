import React from 'react';
import { Link } from 'react-router-dom';
import './HomeServices.css';

const HomeServices = (props) => {
    const { name, img, description, price } = props.country;
    return (
        <div className='package'>
            <img className='img-fluid' src={img} alt="" />
            <div className='package-info'>
                <p className='package-name'>{name}</p>
                <p style={{ fontFamily: 'Poppins', color: 'rgb(53, 50, 50)' }}>{description}</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <h4 className='package-price'>${price}</h4>
                    <Link to='/order' className="cta">
                        <span>Book Now</span>
                        <svg width="10px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;