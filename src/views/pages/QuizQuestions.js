import React from 'react';
import QuizContent from '../../components/QuizQuestions/QuizContent';
import '../../scss/quizQuestions.scss';
import placeHolder from './../../assets/images/modules.png'
const QuizQuestions = () => {
    return (
        <div className='quiz-questions-page'>
            <QuizContent />
            <div className="course-content-side">
                <img src={placeHolder} alt="" />
            </div>
        </div>
    );
};

export default QuizQuestions;