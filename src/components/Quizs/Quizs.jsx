import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizs.css'

const Quizs = () => {
    const quizs = useLoaderData().data.questions;
    return (
        <div className='quizs container'>
            {
                quizs.map(quiz => <Quiz
                    key={quiz.id}
                    quiz = {quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizs;