import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({data}) => {
    const {id, name, logo, total} = data;

    return (
        <div className='topic'>
            <img className='bg-secondary' width={400} height={300} src={logo} alt="" />
            <div className='d-flex justify-content-between mt-3 align-items-center'>
                <p className='fw-bolder text-black fs-3'>{name}</p>
                <p className='fw-bold'>total: {total}</p>
                <button className='btn btn-primary fw-bolder'><Link to={`/quiz/${id}`}>Start Practice</Link></button>
            </div>
        </div>
    );
};

export default Topic;