import axios from 'axios';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

class CocktailModel {

    
    static search(query) {
        const request = axios.get(url + query)
        return request;
    }
};

export default CocktailModel;