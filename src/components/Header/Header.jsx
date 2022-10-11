import React from 'react';

const Header = () => {
    return (
        <div className='d-flex container justify-content-between my-5'>
            <img className='img-fluid rounded-3' src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cXVpenxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className=''>
                <h2>Questions and Answers</h2>
                <h4>General Knowledge Quiz Questions and Answers</h4>
                <ol>
                    <li>What was Meta Platforms Inc formerly known as?</li>
                    <li>Which English city is known as the Steel City?</li>
                    <li>Which former British colony was given back to China in 1997?</li>
                    <li>The logo for luxury car maker Porsche features which animal?</li>
                    <li>Which element is said to keep bones strong?</li>
                    <li>What does CIA stand for?</li>
                    <li>Suriname is located on which continent?</li>
                    <li>Haematology is the study of what?</li>
                    <li>What is the main ingredient in guacamlie?</li>
                </ol>
            </div>
        </div>
    );
};

export default Header;