import React from 'react';

const SingleQuizOption = ({ option, wrong, correct, quizIndex, optionIndex, selectedAnswer, setSelectedAnswer, quizId }) => {
    const handleSetAnswer = () => {
        const currentAnswer = { questionId: quizId, answer: optionIndex }
        const isGiven = selectedAnswer.find(answer => answer.questionId === quizId);
        if (isGiven) {
            const removedPreviousAnswer = selectedAnswer.filter(answer => answer.questionId !== quizId);
            const newSelectedAnswer = [...removedPreviousAnswer, currentAnswer];
            setSelectedAnswer(newSelectedAnswer)
        } else {
            setSelectedAnswer(preValue => [...preValue, currentAnswer])
        }
    }
    return (
        <div className={`single-option ${wrong === optionIndex ? 'wrong-answer' : ''}${correct === optionIndex ? 'correct-answer' : ''}`}>
            <input disabled={!!correct} onChange={handleSetAnswer} type="radio" name={`quiz0${quizIndex}option`} id={`optionId${quizIndex}0${optionIndex}`} />
            <label htmlFor={`optionId${quizIndex}0${optionIndex}`} >{option}</label>
        </div>
    );
};

export default SingleQuizOption;