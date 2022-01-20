import React from 'react';

const SingleQuizOption = ({ option, quizIndex, optionIndex, selectedAnswer, setSelectedAnswer, quizId }) => {
    const handleSetAnswer = () => {
        const currentAnswer = { id: quizId, answer: option }
        const isGiven = selectedAnswer.find(answer => answer.id === quizId);
        if (isGiven) {
            const removedPreviousAnswer = selectedAnswer.filter(answer => answer.id !== quizId);
            const newSelectedAnswer = [...removedPreviousAnswer, currentAnswer];
            setSelectedAnswer(newSelectedAnswer)
        } else {
            setSelectedAnswer(preValue => [...preValue, currentAnswer])
        }
    }
    return (
        <div className='single-option'>
            <input onChange={handleSetAnswer} type="radio" name={`quiz0${quizIndex}option`} id={`optionId${quizIndex}0${optionIndex}`} />
            <label htmlFor={`optionId${quizIndex}0${optionIndex}`}>{option}</label>
        </div>
    );
};

export default SingleQuizOption;