import React from 'react';
import './Quiz.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({quiz}) => {
    const {question, correctAnswer, options} = quiz;
    // console.log(quiz);
    const click = (option) => {
        const correct = correctAnswer === option;
        if(correct){
            toast.success('correct!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
        }
        else{
            toast.error('incorrect! please select a correct answer', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
        }
    }
    return (
        <div className='quiz'>
            <h5 className='question'>{question}</h5>
            <div className='options'>
                {
                    options.map(option => 
                        <div>
                            <p><input type="radio" name='options' value={option} onClick = {() => click(option)}/>{option}</p>
                            <ToastContainer></ToastContainer>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Quiz;