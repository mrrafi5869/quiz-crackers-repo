import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const datas = useLoaderData().data;
    return (
        <div className='topics container'>
            {
                datas.map(data => <Topic
                    key={data.id}
                    data = {data}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;