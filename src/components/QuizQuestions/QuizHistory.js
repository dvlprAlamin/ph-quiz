import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import quizStartImg from './../../assets/images/quiz-start.png'
import trophyImg from './../../assets/images/winner-trophy.svg'
const QuizHistory = () => {
    const [quizData, setQuizData] = useState({});
    const [quizHistory, setQuizHistory] = useState({});
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        setLoading(true)
        axios.get('https://jsdude.com/api/unit/get-unit-content/quiz-task-basic-quiz-1?filterType=slug')
            .then(res => {
                setQuizData(res.data?.data?.[0]);
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

    }, [quizData.unitId])
    return (
        <div className='quiz-history'>
            {
                loading ?
                    <h1>Loading.....</h1> :
                    <div>
                        <h3 className='course-name'>Complete Web Development Course with Jhankar Mahbub</h3>
                        {
                            quizHistory === null ?
                                <div>
                                    <img src={quizStartImg} alt="" />
                                    <p>Total number of Questions {quizData.quizQuestionIdArray?.length}</p>
                                    <p>Total Mark: {quizData.quizQuestionIdArray?.length}</p>
                                    <button className='start-quiz-btn' onClick={() => history.push(`/quiz-question/${'alamin'}`)}>Start Quiz</button>
                                </div> :
                                <>
                                    <img className='trophy-img' src={trophyImg} alt="" />
                                    <div className='your-score'>
                                        <span>Your Score</span>
                                        <h1>{quizHistory.obtainMark}/{quizHistory.mark}</h1>
                                    </div>
                                    <button className='see-answer-btn' onClick={() => history.push(`/quiz-question/${'alamin'}`)}>See Correct Answer</button>
                                </>
                        }

                    </div>
            }
        </div>
    );
};

export default QuizHistory;