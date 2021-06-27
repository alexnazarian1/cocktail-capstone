import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlusCircle } from 'react-bootstrap-icons';

class EditCollection extends React.Component {
    state = {
        show: false,
        name: this.props.collection.name,
        _id: this.props.collection._id,
    }

    handleClose = () => {
        this.setState({
            show: false,
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleShow = (e) => {
        this.setState({
            show: true,
        });
    }

    // componentDidMount() {
    //     console.log('from componentDidMount ====>', this.props.collection._id)
    //     this.setState({
    //         name: this.props.collection.name,
    //         _id: this.props.collection._id
    //     })
    // }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log('this is from handle submit ===>',this.state)
        this.handleClose();
        this.props.handleCollectionEdit(
            this.state.name
        );
    }

    render() {
        
        return (
          <>
            <Button id="button" className="collection-edit" onClick={this.handleShow}>Rename</Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Rename collection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId="name">
                            {/* <Form.Label>What do you want to share?</Form.Label> */}
                            <Form.Control 
                                type="input" 
                                name="name" 
                                placeholder="Collection Name" 
                                value={this.state.name}
                                onChange={this.handleChange}
                                />
                        </Form.Group>

                        <Row>
                            <Col className="post-actions">
                                <button className="post-btn custom-btn btn-16 delete" variant="secondary" onClick={this.handleClose}>
                                    Close
                                </button>
                                <button className="post-btn custom-btn btn-16 submit" type="submit" variant="primary">
                                    Submit
                                </button>
                            </Col>
                        </Row>
                    </Form>
              </Modal.Body>
            </Modal>
          </>
        );
    }
  }
  
export default EditCollection;