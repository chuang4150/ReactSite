import React from 'react';
import Form from './form';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import '../styles/styles.css'

function Contact() {
    return (
          <Container >
            <Row>
              <Col></Col>
              <Col className="justify-content-md-center" >
                <h1>Contact Me</h1>
              <Form></Form>
              </Col>
              <Col></Col>
            </Row>
        </Container>
        );
  }
  export default Contact 