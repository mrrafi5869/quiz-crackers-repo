import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Statistics = () => {
    const [number, setNumber] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setNumber(data))
    }, [])
    console.log(number.data);
    return (
        <div className='container'>
                <LineChart
                width={500}
                height={300}
                data={number.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="name" stroke="#8884d8"  />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>

        </div>
    );
};

export default Statistics;