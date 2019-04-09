import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to Code</h2>
          <p>This is how you buld a website with React, React-Router & React-bootstrap</p>

        <Link to="/about">
        <Button bsStyle="primary">About</Button>
      </Link>
      </Jumbotron>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/marina-vitale-205339-unsplash.jpg" circle className="image-1" />
          <h3>Frank</h3>
          <p>lorem lorm lreom lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/marina-vitale-205339-unsplash.jpg" circle className="image-2" />
          <h3>Frank</h3>
          <p>lorem lorm lreom lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/marina-vitale-205339-unsplash.jpg" circle className="image-3" />
          <h3>Frank</h3>
          <p>lorem lorm lreom lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
        </Col>
      </Row>
    </Container>
    )
  }
}









// first we import react and the Component property of react, from the react library

// then since we will be sending this out of this file to another file ( this file is an Component ) we will export
// using the extend component will allow for this file to be globally available to all that import it
//
// then on the line after that we will dictate what will be rendered once this file is imported and this component
// will return what ever value we put into the div
