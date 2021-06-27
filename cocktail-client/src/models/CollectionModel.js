import axios from 'axios';
const url = 'http://localhost:4000/api/v1/collections';

class CollectionModel {
    static create = (collection) => {
        const request = axios.post(url, collection);
        return request;
    }
    static async all() {
        const request = await axios.get(url);
        return request;
    }
    static show(collectionId) {
        return fetch(`${url}/${collectionId}`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
    }
    static update(collection) {
        const request = axios.put(`${url}/${collection._id}`, collection);
        return request;
    }

    static delete(collectionId) {
        const request = axios.delete(`${url}/${collectionId}`);
        return request;
    }

    static addDrink = (collection, recipe) => {
        const request = axios.put(`${url}/${collection._id}`, collection.recipes)
        return request;
    }
};

export default CollectionModel;