import React from 'react';
import CocktailModel from '../models/CocktailModel';
import CollectionSelectBox from '../components/CollectionSelectBox';

import { Container } from 'react-bootstrap';
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
            <Container className="pt-5" id="search-container">
                <Form id="search-form" style={{ maxWidth: 1000 }}>
                    <Form.Group controlId="search">
                    <Form.Control 
                    type="search" 
                    name="query" 
                    placeholder="What are you drinking?" 
                    onChange={this.handleChange}/>
                    </Form.Group>
                    <button
                    id="button"
                    variant="primary" 
                    type="submit" 
                    onClick={this.handleSearch}>
                        Search
                    </button>
                </Form>
                {this.state.recipes && this.state.recipes.map((recipe) => (
                            <Container className="mb-3 ">
                            <Card id="search-card" style={{ width: '40rem' }}>
                                <Card.Img variant="top" src={recipe.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title id="card-title">{recipe.strDrink}</Card.Title>
                                    <Card.Text>
                                    <p>Ingredients:</p>
                                                <p>{recipe.strMeasure1} {recipe.strIngredient1}</p>
                                                <p>{recipe.strMeasure2} {recipe.strIngredient2}</p>
                                                <p>{recipe.strMeasure3} {recipe.strIngredient3}</p>
                                                <p>{recipe.strMeasure4} {recipe.strIngredient4}</p>
                                                <p>{recipe.strMeasure5} {recipe.strIngredient5}</p>
                                                <p>{recipe.strMeasure6} {recipe.strIngredient6}</p>
                                                <p>{recipe.strMeasure7} {recipe.strIngredient7}</p>
                                                <p>{recipe.strMeasure8} {recipe.strIngredient8}</p>
                                                <p>{recipe.strMeasure9} {recipe.strIngredient9}</p>
                                    <p>Instructions:</p>
                                    <p>{recipe.strInstructions}</p>
                                    </Card.Text>
                                </Card.Body>
                                <CollectionSelectBox recipe={recipe}/>
                            </Card>
                            </Container>
                        ))}

            </Container>
        )
    }
};

export default SearchPage;