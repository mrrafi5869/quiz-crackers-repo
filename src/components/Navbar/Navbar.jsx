import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar d-flex justify-content-between align-items-center'>
            <h1 className='text-primary nav-title'>Quiz</h1>
            <div className='nav-link d-flex'>
                <ul className='d-flex flex-column flex-md-row'>
                    <li><Link to='topics'>Topics</Link></li>
                    <li><Link to='statistics'>Statistics</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;