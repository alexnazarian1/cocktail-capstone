import React from 'react';
import CollectionModel from '../models/CollectionModel';
import CollectionList from '../components/CollectionList';
import CreateCollection from '../components/CreateCollection';
import Collection from '../components/Collection';
import NavBar from '../components/NavBar'

import { Row } from 'react-bootstrap';
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

        const collectionList = this.state.collections.map((collection) => {
            const link = "/collections/" + collection._id
            return <Collection key={collection._id} collection={collection} />;
        })

        return (
            <>
                {/* <Row>
                    {this.state.error && <h4>{this.state.error}</h4>}
                    <CreateCollection  handleCollectionSubmit={this.handleCollectionSubmit} collection={this.collections}/>
                    <CollectionList collections={this.state.collections}/>
                </Row> */}
                <Row>
                    <CreateCollection  handleCollectionSubmit={this.handleCollectionSubmit} collection={this.collections}/>
                    {collectionList}
                </Row>
            </>
        )
    }
}

export default CollectionsPage;



