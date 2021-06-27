import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div id='title'>
                    <h1>Apperitivo</h1>
                    <Link to='/collections'><button>Enter</button></Link>
                </div>
            </div>
        )
    }
}

export default Home;