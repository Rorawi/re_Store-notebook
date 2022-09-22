import React from 'react';
import { Button, Card,Col,Modal } from "react-bootstrap";
import EditNotes from "./EditNotes";
import { useState } from 'react';
import { connect,useDispatch } from 'react-redux';
import { deleteUser } from '../action/userAction';

const NoteBook = (props) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
       
        dispatch(deleteUser(props.data.id))
        console.log(props.data.id)
    }

    
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditNotes prefill={props.data} closeModal={handleClose} className='form'/>
        </Modal.Body>
      </Modal>

<Col>

<Card style={{ width: '18rem' }} className='output'>
      <Card.Body>
        <Card.Title>Notes title:{props.data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> Date:{props.data.date}</Card.Subtitle>
        <Card.Text>
         Note text:{props.data.text}
        </Card.Text>
        <Card.Link href="#" onClick={handleShow}>Edit</Card.Link>
        {/* <Button onClick={(e)=>{dispatch(deleteUser(props.data.id))}}>delete</Button> */}


        <Button  onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
</Col>
        </div>
    );
}

const mapDispatch ={
    deleteUser,
}




export default connect(null,mapDispatch) (NoteBook);
