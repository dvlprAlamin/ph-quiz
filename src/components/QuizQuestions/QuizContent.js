import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import quizzes from '../../assets/fakedata/data.json'
import QuizProgress from './QuizProgress';
import SingleQuizOption from './SingleQuizOption';

const QuizContent = () => {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [quizData, setQuizData] = useState({});
    const [quizHistory, setQuizHistory] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios.get('https://jsdude.com/api/unit/get-unit-content/quiz-task-basic-quiz-1?filterType=slug')
            .then(res => {
                setQuizData(res.data?.data?.[0]);
                setQuizzes(res.data?.data?.[0]?.quizQuestionIdArray);
            })
    }, [])
    useEffect(() => {
        if (quizData.unitId) {
            axios.get(`https://jsdude.com/api/quiz/quiz-history/${quizData.unitId}`)
                .then(res => {
                    setQuizHistory(res.data?.data);
                    setLoading(false)
                })
        }
    }, [quizData.unitId]);
    useEffect(() => {
        if (quizHistory !== null) {
            const newData = quizzes.map(quiz => ({
                ...quiz,
                ...quizHistory.quizList.find(({ questionId }) => questionId === quiz._id),
            }));
            setQuizzes(newData)
        }
    }, [quizHistory])

    const handleSubmit = () => {
        const data = {
            unitId: quizzes[0].unitId,
            quizList: selectedAnswer,
            courseId: quizzes[0].courseId,
        }
        axios.post('https://jsdude.com/api/quiz/quiz-history', data)
            .then(res => {
                console.log(res.data);
            })
    }
    return (
        <div className="quiz-content-side">
            {
                loading ?
                    <h1>Loading.....</h1> :
                    <>
                        <h3 className='course-name'>Complete Web Development Course with Jhankar Mahbub</h3>
                        {
                            quizHistory === null ?
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
                                                        disabled={!selectedAnswer.find(answer => answer.questionId === quiz._id)}
                                                        className='primary-btn'
                                                        onClick={() => setCurrentQuizIndex(currentQuizIndex + 1)}
                                                    >Next</button>
                                                }
                                            </div>
                                        ))

                                    }
                                </div> :
                                <div className='single-quiz'>
                                    {
                                        quizzes.map((quiz, quizIndex) => (
                                            <div key={`100${quizIndex}`} style={{ display: currentQuizIndex === quizIndex ? 'block' : 'none' }}>
                                                <div className='quiz-question' dangerouslySetInnerHTML={{ __html: quiz.question }} />
                                                <div className='quiz-options'>
                                                    {
                                                        quiz.options?.map((option, optionIndex) => (
                                                            <SingleQuizOption
                                                                quizId={quiz._id}
                                                                wrong={quiz.wrongIndex}
                                                                correct={quiz.correctIndex}
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
                                                {currentQuizIndex !== quizzes.length - 1 &&
                                                    <button
                                                        className='primary-btn'
                                                        onClick={() => setCurrentQuizIndex(currentQuizIndex + 1)}
                                                    >Next</button>
                                                }
                                            </div>
                                        ))

                                    }
                                </div>


                        }
                    </>
            }
        </div>
    );
};

export default QuizContent;