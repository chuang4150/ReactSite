import React from 'react';
import Card from './card';
import { Jumbotron, Button, Container, Row } from 'react-bootstrap';

function Projects() {
    return (
        <Container>
          <Row>
            <Jumbotron id='rcorners2'>
              <h1>Projects </h1>
              <p>
              This is a simple hero fasdfasdfasunit, a simple jumbotron-style component for calling
              extra attention to featured content or information. happakldfjas;ldjf;sajdflkasjdkfjas;ldkjfs;l
              </p>
              <p>
                <Button variant="warning">Learn more</Button>
              </p>
            </Jumbotron>
          </Row>
          <Row>
            <Card ></Card>
          </Row>
       </Container>
        );
  }
  export default Projects 