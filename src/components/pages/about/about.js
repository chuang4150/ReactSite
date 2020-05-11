import { Container, Carousel } from 'react-bootstrap';
import React from 'react';
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
    console.log("worked");
    return (
  <Container>
   <Carousel>
  <Carousel.Item>
    <img
      src={require('./propic.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>cheese</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={require('./pic1.jpg')}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={require('./image1.jpeg')}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vque nisl.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Container>
        );
  }
  export default About 