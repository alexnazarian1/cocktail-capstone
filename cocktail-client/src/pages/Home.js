import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1>You're Home!</h1>
                <Link to='/collections'>Enter</Link>
            </div>
        )
    }
}

export default Home;