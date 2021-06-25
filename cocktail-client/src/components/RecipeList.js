import RecipeListGroupItem from './RecipeListGroupItem';
// import RecipeShow from './RecipeShow';

import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RecipeList(props) {
    const recipeListItems = props.recipes.length && props.recipes.map((recipe, index) => {
        return <RecipeListGroupItem key={recipe.idDrink} recipe={recipe} />
    });
    // const recipeTabPanes = props.recipes.length && props.recipes.map((recipe, index) => {
    //     return <RecipeShow key={recipe.idDrink} recipe={recipe} />
    // });
    return (
        <Tab.Container id="collection-tabs">
            <Row>
                <Col sm={6}>
                    <ListGroup>
                        { recipeListItems }
                    </ListGroup>
                </Col>
                {/* <Col sm={6}>
                    <Tab.Content>
                        { recipeTabPanes }
                    </Tab.Content>
                </Col> */}
            </Row>
        </Tab.Container>
    );
}

export default RecipeList;