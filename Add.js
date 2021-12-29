import React , {useState} from 'react'
import {Button , Modal,InputGroup,FormControl} from 'react-bootstrap'


export default function Add() {
    // Modal manipulation
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> Title </InputGroup.Text>
    <FormControl
      placeholder="Enter the movie title"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> Description </InputGroup.Text>
    <FormControl
      placeholder="Enter the movie description"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
    <FormControl
      placeholder="Enter movie URL image"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Rate</InputGroup.Text>
    <FormControl
      placeholder="Rating"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 