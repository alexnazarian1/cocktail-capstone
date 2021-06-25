import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'

import { Link } from 'react-router-dom';

function CollectionListGroupItem(props) {
    if (!props.collection.recipes.length) {
        return (
            <Link to={`/collections/${props.collection._id}`}>
            <ListGroup.Item>
                <Image thumbnail src='https://i.stack.imgur.com/y9DpT.jpg' />
                <h2>{props.collection.name}</h2>
            </ListGroup.Item>
        </Link>
        )
    } else {
        return (
            <Link to={`/collections/${props.collection._id}`}>
                <ListGroup.Item>
                    <Image thumbnail src={props.collection.recipes[0].strDrinkThumb} />
                    <h2>{props.collection.name}</h2>
                </ListGroup.Item>
            </Link>
        );
    }
    
};

export default CollectionListGroupItem;