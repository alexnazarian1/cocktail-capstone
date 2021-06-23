import React from 'react';
import CollectionModel from '../models/CollectionModel';
import CollectionList from '../components/CollectionList';

import { Container } from 'react-bootstrap';

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

    componentDidMount() {
        this.fetchCollectionData();
    }

    render() {
        if (this.state.collections.length === 0) return <h1>No Collections Found</h1>
        return (
            <Container className='collections-container'>
                <h1>Collections Here!</h1>
                <CollectionList collections={this.state.collections}/>
            </Container>
        )
    }
}

export default CollectionsPage;



