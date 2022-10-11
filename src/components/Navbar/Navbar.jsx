import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar d-flex justify-content-between align-items-center'>
            <h1 className='text-primary nav-title'>Quiz</h1>
            <div className='nav-link'>
                <Link to='topics'>Topics</Link>
                <Link to='statistics'>Statistics</Link>
                <Link to='blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;