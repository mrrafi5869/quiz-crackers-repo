import React from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({quiz}) => {
    const {question, correctAnswer, options} = quiz;
    
    const rightAnswer = () => {
        toast.success(correctAnswer, {
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
        <div>
            <div className='quiz'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h5 className='question'>{question.slice(3, -4)}</h5>
                    <FontAwesomeIcon onClick={rightAnswer} icon={faQuestion}></FontAwesomeIcon>
                </div>
                <div className='options'>
                    {
                        options.map(option => 
                            <div>
                                <p onClick = {() => click(option)}><input type="radio" name='options' value={option}/>{option}</p>
                                <ToastContainer></ToastContainer>
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;