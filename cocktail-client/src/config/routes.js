import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import CollectionsPage from '../pages/CollectionsPage';
import RecipeShowPage from '../pages/RecipeShowPage';
import CollectionShow from '../pages/CollectionShow';

function Routes(props) {
    
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path='/collections/:id' component={CollectionShow} />
            <Route exact path='/collections' component={CollectionsPage} />
            <Route path='/recipe/:id' component={RecipeShowPage} />
        </>
    );
}

export default Routes;