import React from 'react';
import NavBar from './components/NavBar'
import { withRouter } from 'react-router-dom';
import routes from './config/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App(props) {
    const path = props.location.pathname
    return (
      <React.Fragment>
        {path !== '/' && <NavBar />}
        { routes }
      </React.Fragment>
    )
}

export default withRouter(App);
