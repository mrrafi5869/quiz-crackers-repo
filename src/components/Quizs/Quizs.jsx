import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizs.css';

const Quizs = () => {
    const title = useLoaderData().data;
    const quizs = useLoaderData().data.questions;
    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Questoin of {title.name}</h1>
            <div className='quizs'>
            {
                quizs.map(quiz => <Quiz
                    key={quiz.id}
                    quiz = {quiz}
                    title = {title}
                ></Quiz>)
            }
        </div>
        </div>
    );
};

export default Quizs;