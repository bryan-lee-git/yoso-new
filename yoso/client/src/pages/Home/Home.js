import React from 'react';
import { Container, Col, Row, Button } from "react-materialize";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <Row>
                <br/>
                <Col s={6} offset="s3">
                    <img id="home-logo" alt="yoso logo" src="./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"></img>            
                </Col>
            </Row>
            <Row className="center-align animate-up">
                <Col s={6} m={4} l={4}><Link to="/lists"><Button id="home-list" className="home-btn z-depth-5 btn-large">LISTS</Button></Link></Col>
                <Col s={6} m={4} l={4}><Link to="/pantry"><Button id="home-pantry" className="home-btn z-depth-5 btn-large">PANTRY</Button></Link></Col>
                <Col s={6} m={4} l={4}><Link to="/waste"><Button id="home-waste" className="home-btn z-depth-5 btn-large">WASTE</Button></Link></Col>
                <Col s={6} m={4} l={4}><Link to="/recipes"><Button id="home-recipes" className="home-btn z-depth-5 btn-large">RECIPES</Button></Link></Col>
                <Col s={6} m={4} l={4}><Link to="/account"><Button id="home-account" className="home-btn z-depth-5 btn-large">ACCOUNT</Button></Link></Col>
                <Col s={6} m={4} l={4}><Link to="/logout"><Button id="home-logout" className="home-btn z-depth-5 btn-large">LOGOUT</Button></Link></Col>
            </Row>
        </Container>
    );
}

export default Home;
