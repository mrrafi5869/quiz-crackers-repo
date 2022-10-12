import { useEffect, useState } from 'react';
import './Topic.css'

const Topic = ({data}) => {
    const { name, logo, total} = data;

    const [quiz, setQuiz] = useState([]);
    useEffect(() => {
        
    } , [])

    return (
        <div className='topic'>
            <img className='bg-secondary' width={400} height={300} src={logo} alt="" />
            <div className='d-flex justify-content-between mt-3 align-items-center'>
                <p className='fw-bolder text-black fs-3'>{name}</p>
                <p className='fw-bold'>total: {total}</p>
                <button className='btn btn-primary fw-bolder'>Start Practice</button>
            </div>
        </div>
    );
};

export default Topic;