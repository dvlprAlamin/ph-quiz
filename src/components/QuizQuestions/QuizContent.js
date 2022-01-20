import axios from 'axios';
import React, { useEffect, useState } from 'react';
import quizzes from '../../assets/fakedata/data.json'
import QuizProgress from './QuizProgress';
import SingleQuizOption from './SingleQuizOption';

const QuizContent = () => {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    // const [quizzes, setQuizzes] = useState([]);
    // useEffect(() => {
    //     axios.get('http://jsdude.com/api/unit/get-unit-content/quiz-task-basic-quiz-1?filterType=slug')
    //         .then(res => {
    //             setQuizzes(res.data?.data?.[0]?.quizQuestionIdArray);
    //         })
    // }, [])
    const handleSubmit = () => {
        alert(JSON.stringify(selectedAnswer))
    }
    return (
        <div className="quiz-content-side">
            <h3 className='course-name'>Complete Web Development Course with Jhankar Mahbub</h3>
            <div className='single-quiz'>
                <QuizProgress currentQuizIndex={currentQuizIndex} selectedQuiz={selectedAnswer.length} totalQuiz={quizzes?.length} />
                {
                    quizzes.map((quiz, quizIndex) => (
                        <div key={`100${quizIndex}`} style={{ display: currentQuizIndex === quizIndex ? 'block' : 'none' }}>
                            <div className='quiz-question' dangerouslySetInnerHTML={{ __html: quiz.question }} />
                            <div className='quiz-options'>
                                {
                                    quiz.options?.map((option, optionIndex) => (
                                        <SingleQuizOption
                                            quizId={quiz._id}
                                            selectedAnswer={selectedAnswer}
                                            setSelectedAnswer={setSelectedAnswer}
                                            key={optionIndex}
                                            quizIndex={quizIndex}
                                            optionIndex={optionIndex}
                                            option={option} />
                                    ))
                                }
                            </div>
                            {currentQuizIndex !== 0 &&
                                <button
                                    className='previous-btn'
                                    onClick={() => setCurrentQuizIndex(currentQuizIndex - 1)}
                                >Previous</button>}
                            {currentQuizIndex === quizzes.length - 1 ?
                                <button
                                    disabled={selectedAnswer.length !== quizzes.length}
                                    className='primary-btn'
                                    onClick={handleSubmit}
                                >Submit</button> :
                                <button
                                    disabled={!selectedAnswer.find(answer => answer.id === quiz._id)}
                                    className='primary-btn'
                                    onClick={() => setCurrentQuizIndex(currentQuizIndex + 1)}
                                >Next</button>
                            }
                        </div>
                    ))

                }
            </div>
        </div>
    );
};

export default QuizContent;