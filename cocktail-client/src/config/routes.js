import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import CollectionsPage from '../pages/CollectionsPage';

function Routes(props) {
    
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path='/collections' component={CollectionsPage} />
        </>
    );
}

export default Routes;