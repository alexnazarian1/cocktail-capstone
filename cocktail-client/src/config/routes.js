import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import CollectionsPage from '../pages/CollectionsPage';
import RecipeShowPage from '../pages/RecipeShowPage';
import CollectionShow from '../pages/CollectionShow';
import SearchPage from '../pages/SearchPage';

function Routes(props) {
    
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path='/collections/:id' component={CollectionShow} />
            <Route exact path='/collections' component={CollectionsPage} />
            <Route path='/recipe/:id' component={RecipeShowPage} />
            <Route path='/search' component={SearchPage} />
        </>
    );
}

export default Routes;