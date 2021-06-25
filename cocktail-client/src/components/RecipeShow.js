import { Col, Row, Tab } from 'react-bootstrap';

function RecipeShow(props) {
    return (
        <Tab.Pane eventKey={props.recipe.idDrink}>
            <Row>
                <Col>
                    <h1>Stuff</h1>
                </Col>
            </Row>
        </Tab.Pane>
    );
};

export default RecipeShow;