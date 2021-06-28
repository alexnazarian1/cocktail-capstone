import React from 'react';
import { Container, Button, Nav } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import CollectionModel from '../models/CollectionModel';

import EditCollection from '../components/EditCollection';


import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';




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
            <Container className="mt-3">
                <h1>{this.state.collection.name}</h1>
                <EditCollection handleCollectionEdit={this.handleCollectionEdit} collection={this.state.collection}/>
                <Button id="button" className="collection-edit m-1 button" onClick={this.handleDelete}>Delete</Button>
                {this.state.error && <h4>{this.state.error}</h4>}
                    <Tab.Container defaultActiveKey="first" >
                        <div id="recipe-tabs">
                            <div>
                                {this.state.collection.recipes && this.state.collection.recipes.map((recipe) => (
                                    <>
                                    <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link id="nav-link" eventKey={recipe.idDrink}>{recipe.strDrink}</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    </>
                                ))}
                            </div>
                            <div>
                                {this.state.collection.recipes && this.state.collection.recipes.map((recipe) => (
                                    <>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey={recipe.idDrink}>
                                                
                                                <img className="recipe-img" src={recipe.strDrinkThumb}/>
                                    
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
                                         
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    </>
                                ))}
                            </div>
                        </div>
                    </Tab.Container>
            </Container>
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