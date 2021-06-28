import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlusCircle } from 'react-bootstrap-icons';

class CreateCollection extends React.Component {
    state = {
        show: false,
        name: '',
    }

    handleClose = () => {
        this.setState({
            show: false,
            body: '',
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleClose();
        this.props.handleCollectionSubmit({
            name: this.state.name,
        });
    }

    render() {
        return (
          <Container className="mt-3">
            <button id="button" className="collection-plus" onClick={this.handleShow}>+ collection</button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Add a collection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId="body">
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
                                    close
                                </button>
                                <button className="post-btn custom-btn btn-16 submit" type="submit" variant="primary">
                                    submit
                                </button>
                            </Col>
                        </Row>
                    </Form>
              </Modal.Body>
            </Modal>
          </Container>
        );
    }
  }
  
export default CreateCollection;