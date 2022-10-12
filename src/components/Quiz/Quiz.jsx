import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {question, correctAnswer, options} = quiz;
    console.log(options);
    // console.log(quiz);
    return (
        <div className='quiz'>
            <h5 className='question'>{question}</h5>
            <div className='options'>
                <input type="radio" name='options' id="" value={options[0]}/>{options[0]}
                <input type="radio" name='options' id="" value={options[1]}/>{options[1]}
                <input type="radio" name='options' id="" value={options[2]}/>{options[2]}
                <input type="radio" name='options' id="" value={options[3]}/>{options[3]}
            </div>
        </div>
    );
};

export default Quiz;