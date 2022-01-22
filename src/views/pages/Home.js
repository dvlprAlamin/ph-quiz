import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <Link to={'/quiz/alamin'}>
                <button style={{ padding: '20px 30px' }}>Go to Quiz</button>
            </Link>
        </div>
    );
};

export default Home;