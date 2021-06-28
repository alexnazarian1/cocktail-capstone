import ListGroup from 'react-bootstrap/ListGroup';

function CollectionItem(props) {
    return (
        <div className="collection-container">
            <ListGroup.Item className="collection">
                <strong>
                    <p>Collection Name</p>
                </strong>
            </ListGroup.Item>
        </div>
    )
}

export default CollectionItem;