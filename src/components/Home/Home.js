import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServices from '../HomeServices/HomeServices';
import loading from '../../assets/images/loading.gif';
import qna from '../../assets/images/qna.png';
import users from '../../assets/images/users.png';
import './Home.css';

const Home = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://howling-wizard-23242.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    const allPackages = packages.slice(0, 6);

    return (
        <div>
            <div className='home-banner'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 banner-info">
                            <h1 className='text-white banner-title'>Find Next Place To Visit</h1>
                            <p style={{ fontFamily: 'Poppins', color: 'white', fontSize: '20px' }}>Discover Amazing Places At Exclusive Deals</p>
                        </div>
                        <div className="col-lg-6 main-btn">
                            <Link to='/packages'>Book Your Trip</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '100px' }} className='container'>
                <h2 className='title text-center'>Our Packages</h2>

                <div className='services'>
                    {
                        allPackages ? allPackages.map(country => <HomeServices
                            key={country._id}
                            country={country}
                        ></HomeServices>) :
                            <img src={loading} alt="" />
                    }
                </div>
                <div style={{ marginTop: '100px' }} className='container'>
                    <h2 className='title text-center'>Frequently Asked Question</h2>
                    <div style={{ marginTop: '70px' }} className='row'>
                        <div className='col-lg-6'>
                            <img className='w-75' src={qna} alt="" />
                        </div>
                        <div className='col-lg-6 qna-info'>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Why We Are The Best Trip Planner?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">We offer excellent tour packages ar effordable cost. Let the dream trip be with us.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            How Many Packages Do We Have?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">We have multiple packages with countries all over the globe. Try our packages of sensation and make special moments.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Can We Book Tickets From Here?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">You can book your ticket here and leave the rest to us. All you have to do is make an appointment and let the deal be done.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div style={{ marginTop: '100px' }} className='container'>
                <h2 className='title text-center'>See why travellers <span style={{ color: '#0197a8' }}>choose</span> us!</h2>
                <div className='row'>
                    <div className='col-lg-6 users-part'>
                        <img className='w-75' src={users} alt="" />
                    </div>
                    <div style={{ marginTop: '100px' }} className='col-lg-6'>
                        <p style={{ fontFamily: 'Poppins', color: 'grey' }}>Really helpful, friendly, and have understood that I'm a really small travel agent and then been sensitive to that fact. If I have any problem they're always there to help.</p>
                        <div className='d-flex'>
                            <div>
                                <hr />
                            </div>
                            <div className='ms-4'>
                                <h3 style={{ fontFamily: 'Poppins', fontWeight: '600' }}>Thomas Adison</h3>
                                <p style={{ fontFamily: 'Poppins', color: 'grey' }}>Traveller</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;