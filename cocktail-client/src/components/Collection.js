import { Col, Card } from 'react-bootstrap';

import { Link } from "react-router-dom";

function Collection(props) {
    console.log(props)

    if (!props.collection.recipes.length) {
        return (
            <Col className="mb-4" sm={3}>
                <Link to={`/collections/${props.collection._id}`}>
                    <Card id="collection-card" style={{ width: '13rem' }}>
                        <Card.Img variant="top" src="https://i.stack.imgur.com/y9DpT.jpg" style={{ maxHeight: 150 }} />
                        <Card.Body>
                        <Card.Title>{props.collection.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        )
    } else {
        return (
            <Col className="mb-4" sm={3}>
                <Link to={`/collections/${props.collection._id}`}>
                    <Card id="collection-card">
                        <Card.Img variant="top" src={props.collection.recipes[0].strDrinkThumb} style={{ maxHeight: 150 }} />
                        <Card.Body>
                        <Card.Title>{props.collection.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        )
    }
}

export default Collection;