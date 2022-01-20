import React from 'react';

const QuizProgress = ({ currentQuizIndex, totalQuiz, selectedQuiz }) => {
    const progress = 100 / totalQuiz * currentQuizIndex;
    return (
        <>
            <div className="progress-bar">
                <div className='progress-field' style={{ flexBasis: selectedQuiz === totalQuiz ? '100%' : `${progress}%` }}>
                </div>
            </div>
            <p>Question {currentQuizIndex + 1} out of {totalQuiz}</p>
        </>
    );
};

export default QuizProgress;