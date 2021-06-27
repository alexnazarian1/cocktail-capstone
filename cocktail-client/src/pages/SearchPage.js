import React from 'react';
import CocktailModel from '../models/CocktailModel';
import CollectionSelectBox from '../components/CollectionSelectBox'
import NavBar from '../components/NavBar'

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class SearchPage extends React.Component {
    
    state = {
        query: '',
        recipes: [],
    }

    handleChange = (e) => {
        this.setState ({
            query: e.target.value
        });
    }

    handleSearch = (e) => {
        e.preventDefault()
        CocktailModel.search(this.state.query)
            .then((data) => {
                console.log(data)
                this.setState ({
                    recipes: data.data.drinks
                })
            })
        }

    // data.drinks

    render() {
        return (
            <div>
                <NavBar />
                <h1>This is a search page!</h1>
                <Form>
                    <Form.Group controlId="search">
                    <Form.Label>Search</Form.Label>
                    <Form.Control 
                    type="search" 
                    name="query" 
                    placeholder="What are you drinking?" 
                    onChange={this.handleChange}/>
                    </Form.Group>
                    <button
                    variant="primary" 
                    type="submit" 
                    onClick={this.handleSearch}>
                        Submit
                    </button>
                </Form>
                {this.state.recipes && this.state.recipes.map((recipe) => (
                            <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={recipe.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title>{recipe.strDrink}</Card.Title>
                                    <Card.Text>
                                    <p>Ingredients:</p>
                                    <p>{recipe.strIngredient1}</p>
                                    <p>{recipe.strIngredient2}</p>
                                    <p>{recipe.strIngredient3}</p>
                                    <p>Instructions:</p>
                                    <p>{recipe.strInstructions}</p>
                                    </Card.Text>
                                </Card.Body>
                                <CollectionSelectBox recipe={recipe}/>
                            </Card>
                            </>
                        ))}

            </div>
        )
    }
};

export default SearchPage;