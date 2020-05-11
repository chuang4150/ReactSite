import React from 'react';
import { Form, Button } from "react-bootstrap";
import '../styles/styles.css'

function form () {
    return(
    <Form id='rcorners2'>
  <Form.Group controlId="formBasicEmail">
    <Form.Label id='formlabel'>Full Name</Form.Label>
    <Form.Control type="name" placeholder="Enter Full Name" />
  </Form.Group>

  <Form.Group controlId="formBasicPasswor">
    <Form.Label id='formlabel'>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Email Address" />
  </Form.Group>
  <Form.Label id='formlabel'>Description</Form.Label>
  <Form.Control id='ctextbox' type="text" placeholder="Write Something" />
  <br />
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
}

export default form