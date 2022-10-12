import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='text-center mt-5'>
            <h1>Error found</h1>
            <h3 className='mb-4'>404</h3>
            <Link
            to='/'
            className='fw-bolder px-5 py-3 rounded bg-primary text-warning'
          >
            Back to homepage
          </Link>
        </div>
    );
};

export default Errorpage;