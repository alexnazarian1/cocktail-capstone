import CollectionListGroupItem from './CollectionListGroupItem';

import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CollectionList(props) {
    const collectionListItems = props.collections.map((collection, index) => {
        return <CollectionListGroupItem key={collection.id} collection={collection} />
    });
    return (
        <Tab.Container id="collection-tabs" >
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        { collectionListItems }
                    </ListGroup>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default CollectionList;