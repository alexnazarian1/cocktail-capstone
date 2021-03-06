import { Container, Col, Card } from 'react-bootstrap';

import { Link } from "react-router-dom";

function Collection(props) {
    console.log(props)

    if (!props.collection.recipes.length) {
        return (
            <Container>
                <Col sm={3}>
                    <Link to={`/collections/${props.collection._id}`}>
                        <Card id="collection-card" className="mb-2 mt-2 text-dark" id="collection-card" style={{ width: '13rem' }}>
                            <Card.Img variant="top" src="https://i.stack.imgur.com/y9DpT.jpg" style={{ Height: 150 }} />
                            <Card.Body>
                            <Card.Title>{props.collection.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Container>
        )
    } else {
        return (
            <Container>
                <Col sm={3}>
                    <Link to={`/collections/${props.collection._id}`}>
                        <Card id="collection-card" className="mb-2 mt-2 text-dark" id="collection-card" style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={props.collection.recipes[0].strDrinkThumb} style={{ Height: 150 }} />
                            <Card.Body>
                            <Card.Title>{props.collection.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Container>
        )
    }
}

export default Collection;