import React from 'react';
import QuizHistory from '../../components/QuizQuestions/QuizHistory';
import '../../scss/quizHistories.scss';
import placeHolder from './../../assets/images/modules.png'
const QuizHistories = () => {
    return (
        <div className='quiz-histories-page'>
            <QuizHistory />
            <div className="course-content-side">
                <img src={placeHolder} alt="" />
            </div>
        </div>
    );
};

export default QuizHistories;