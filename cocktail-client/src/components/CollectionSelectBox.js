import React from 'react';
import CollectionModel from '../models/CollectionModel';

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

    render() {
        return (
            <div className="form-group">
                <label htmlFor="select1" >Add to Collection:</label>
                <select value={this.state.value} onChange={this.onChange} className="form-control">
                    <option value="select">Select an Option</option>
                    {this.state.collections && this.state.collections.map((collection) => (
                            <>
                                <option value={collection.name}>{collection.name}</option>
                            </>
                        ))}
                </select>
                <button>Add to Collection</button>
            </div>
        )
    }
}

export default CollectionSelectBox;