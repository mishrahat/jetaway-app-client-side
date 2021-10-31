import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, signInWithGoogle, logOut } = useAuth();
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to='/home'><img style={{ width: '120px' }} src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/packages'>Packages</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blogs'>Blogs</Link>
                            </li>
                            {user.email && <li className="nav-item">
                                <Link to='/mybookings'>My Bookings</Link>
                            </li>}
                            {user.email && <li className="nav-item">
                                <Link to='/managebookings'>Manage Bookings</Link>
                            </li>}
                            {user.email && <li className="nav-item">
                                <Link to='/addpackages'>Add New Package</Link>
                            </li>}

                            <li className="nav-item">
                                {
                                    user.email ?

                                        <Link onClick={logOut}>Log Out</Link> :
                                        <Link to='/login'>Login</Link>
                                }
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;