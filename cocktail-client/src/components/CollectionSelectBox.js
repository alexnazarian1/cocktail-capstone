import React from 'react';
import CollectionModel from '../models/CollectionModel';
import { Container } from 'react-bootstrap';

class CollectionSelectBox extends React.Component {
    state = {
        value: 'select',
        collections: [],
        error: null,
        recipe: this.props.recipe,
    }

    onChange = (e) => {
        this.setState ({
            value: e.target.value
        })
    }

    fetchCollectionData = () => {
        CollectionModel.all()
            .then(response => {
                if (response.data.message) {
                    this.setState({
                        error: response.data.message,
                    });
                } else {
                    console.log(response)
                    this.setState({
                        collections: response.data.collections,
                    });
                };
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                });
            })
    }

    componentDidMount() {
        this.fetchCollectionData();
    }

    recipeSubmit = async () => {
        console.log(this.props.recipe)
        await CollectionModel.addDrink(this.state.value, this.props.recipe)
    }

    render() {
        return (
            <Container id="collection-select-box" className="form-group mb-3">
                <label htmlFor="select1" >Add to Collection:</label>
                <select value={this.state.value} onChange={this.onChange} className="form-control">
                    <option value="select">Select an Option</option>
                    {this.state.collections && this.state.collections.map((collection) => (
                            <>
                                <option value={collection._id}>{collection.name}</option>
                            </>
                        ))}
                </select>
                <button id="collection-add-button" onClick={this.recipeSubmit}>Add to Collection</button>
            </Container>
        )
    }
}

export default CollectionSelectBox;