import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'

function RecipeListGroupItem(props) {
    console.log(props)
    return (
        <div>
            <ListGroup.Item>
                <Image thumbnail src={props.recipe.strDrinkThumb} />
                <h2>{props.recipe.strDrink}</h2>
            </ListGroup.Item>
        </div>
    );
};

export default RecipeListGroupItem;