import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'

function CollectionListGroupItem(props) {
    return (
        <div>
            <ListGroup.Item>
                <Image thumbnail src={props.collection.recipes[0].strDrinkThumb} />
                <h2>{props.collection.name}</h2>
            </ListGroup.Item>
        </div>
    );
};

export default CollectionListGroupItem;