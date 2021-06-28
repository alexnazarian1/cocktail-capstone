import React from 'react';
import NavBar from './components/NavBar'
import { Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import routes from './config/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App(props) {
    const path = props.location.pathname
    return (
      <React.Fragment>
        {path !== '/' && <NavBar />}
      <Container className="pt-5">
        { routes }
      </Container>
      </React.Fragment>
    )
}

export default withRouter(App);
