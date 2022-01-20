import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../scss/quizQuestions.scss';
import placeHolder from './../../assets/images/modules.png'
const QuizQuestions = () => {
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        axios.get('http://jsdude.com/api/unit/get-unit-content/quiz-task-basic-quiz-1?filterType=slug')
            .then(res => {
                setQuizzes(res.data?.data?.[0]?.quizQuestionIdArray);
            })
    }, [])
    console.log(quizzes);
    return (
        <div className='quiz-questions-page'>
            <div className="quiz-content-side">
                <h3 className='course-name'>Complete Web Development Course with Jhankar Mahbub</h3>
                <div className='single-quiz'>
                    <h4 className='quiz-question'>Which is a synonym of bellicose?</h4>
                    <div className='quiz-options'>
                        <label className='checked-answer'>
                            <input type="radio" name="option" id="" />
                            <span>warlike</span>
                        </label>
                        <label className='correct-answer'>
                            <input type="radio" name="option" id="" />
                            <span>warlike</span>
                        </label>
                        <label className='wrong-answer'>
                            <input type="radio" name="option" id="" />
                            <span>warlike</span>
                        </label>
                        <label>
                            <input type="radio" name="option" id="" />
                            <span>warlike</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="course-content-side">
                <img src={placeHolder} alt="" />
            </div>
        </div>
    );
};

export default QuizQuestions;