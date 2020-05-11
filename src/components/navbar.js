import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './pages/about/about';
import Projects from'./pages/projects/projects';
import Contact from './pages/contact/contact';
import '../components/pages/styles/styles.css'

function navbar() {
    return (
    <Router>
    <Navbar bg="light" variant="light" expand="lg" sticky='top' id='navbar' >
        <Navbar.Brand as={Link} to="/about">Chris Huang</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/projects">
      <Projects />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
  </Switch>
    </Router>
    );
}
export default navbar