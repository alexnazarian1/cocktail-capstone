import ListGroup from 'react-bootstrap/ListGroup';

function CommentItem(props) {
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

export default CommentItem;