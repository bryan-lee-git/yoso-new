import React from 'react';
import { Container, Row, Col, Button } from 'react-materialize';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Container className="center-align">
            <Row>
                <br/><br/>
                <Col s={12} l={6} offset="l3">
                    <img id="home-logo" alt="yoso logo" src="./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"></img>            
                </Col>
            </Row>
            <br/>
            <Row className="btn-row">
                <Col className="animate-up" s={6} l={4}>
                    <Link to="/about"><Button id="home-learn" className="home-btn z-depth-5 btn-large">YOSO?</Button></Link>
                </Col>
                <Col className="animate-up-2" s={6} l={4}>
                    <Link to="/signin"><Button id="home-login" className="home-btn z-depth-5 btn-large">LOGIN</Button></Link>
                </Col>
                <Col className="animate-up-3" s={12} l={4}>
                    <Link to="/signup"><Button id="home-signup" className="home-btn z-depth-5 btn-large">SIGN-UP</Button></Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;