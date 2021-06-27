import React from 'react';
import CollectionModel from '../models/CollectionModel';
import CollectionList from '../components/CollectionList';
import CreateCollection from '../components/CreateCollection';
import NavBar from '../components/NavBar'

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CollectionsPage extends React.Component {
    state = {
        collections: [],
        error: null,
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

    handleCollectionSubmit = (collection) => {
        CollectionModel.create(collection)
            .then(response => {
                if (response.data.message) {
                    this.setState({
                        error: response.data.message,
                    })
                } else {
                    let collections = this.state.collections;
                    collections.push(response.data.collection);
                    this.setState({
                        collections: collections,
                    });
                };
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                });
            });
    }

    componentDidMount() {
        this.fetchCollectionData();
    }

    render() {
        return (
            <>
                <Container className='collections-container'>
                    <h1>Collections</h1>
                    <CreateCollection  handleCollectionSubmit={this.handleCollectionSubmit} collection={this.collections}/>
                    <CollectionList collections={this.state.collections}/>
                </Container>
            </>
        )
    }
}

export default CollectionsPage;



