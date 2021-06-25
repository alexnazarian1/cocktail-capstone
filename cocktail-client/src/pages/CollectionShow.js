import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import CollectionModel from '../models/CollectionModel';

import EditCollection from '../components/EditCollection';



class CollectionShow extends React.Component {

    state = {
        collection: {},
        redirect: false,
        error: null,
    }

    componentDidMount() {
        const collectionId = this.props.match.params.id;

        CollectionModel.show(collectionId)
            .then((data) => {
                if (data.message) {
                    return this.setState({
                        error: data.message
                    })
                }

                this.setState({
                    error: null,
                    collection: data.collection
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    error: err.message
                });
            })
    }

    handleCollectionEdit = (name) => {
        CollectionModel.update({
            name: name,
            _id: this.state.collection._id
        })
          .then(response => {
            if (response.data.message) {
              this.setState({
                error: response.data.message,
              });
            } else {
                this.setState({
                    error: null,
                    collection: response.data.collection
                })
            } 
          })
          .catch(err => {
            this.setState({
              error: err.message,
            });
          });
    }

    handleDelete = () => {
        CollectionModel.delete(this.state.collection._id)
          .then(response => {
            if (response.data.message) {
              this.setState({
                error: response.data.message,
              });
            } else {
              this.setState({
                redirect: true,
              });
            }
          })
          .catch(err=> {
            this.setState({
              error: err.message,
            });
          });
    }



    render() {
        if (this.state.redirect) {
            return <Redirect to="/collections" />
        };
        return (
            <section>
                <h1>{this.state.collection.name}</h1>
                <EditCollection handleCollectionEdit={this.handleCollectionEdit} collection={this.state.collection}/>
                <Button className="collection-edit m-1" onClick={this.handleDelete}>Delete</Button>
                {this.state.error && <h4>{this.state.error}</h4>}
                    <Accordion defaultActiveKey="0">
                        {this.state.collection.recipes && this.state.collection.recipes.map((recipe) => (
                            <>
                            <Accordion.Toggle as={Button} variant="link" eventKey={recipe.idDrink}>{recipe.strDrink}</Accordion.Toggle>
                            <Accordion.Collapse eventKey={recipe.idDrink}>
                                <Card.Body>
                                    <img src={recipe.strDrinkThumb}/>
                                    <p>Ingredients:</p>
                                    <p>{recipe.strIngredient1}</p>
                                    <p>{recipe.strIngredient2}</p>
                                    <p>{recipe.strIngredient3}</p>
                                    <p>Instructions:</p>
                                    <p>{recipe.strInstructions}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                            </>
                        ))}
                    </Accordion>
            </section>
        )
    }

}

export default CollectionShow;

{/* <Card style={{ width: '18rem'}}>
                        <Card.Img varient="top" src={this.state.collection.recipes[0].strDrinkThumb} style={{ maxHeight: 150 }} />
                        <Card.Body>
                            <Card.Title>{this.state.collection.name}</Card.Title>
                        </Card.Body>
                        <RecipeList recipes={this.state.collection.recipes}/>
                    </Card> */}