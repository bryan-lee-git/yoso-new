import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from "react-materialize";
import { Link } from "react-router-dom";

const props = {
    loggedIn: false
}

class Home extends Component {
    render() {
        return (
        <Container className="center-align">
            <Row>
                <br/>
                <Col s={6} offset="s3">
                    <img id="home-logo" alt="yoso logo" src="./img/Yoso-Logo-Large-Text-White.svg"></img>            
                </Col>
            </Row>
            {props.loggedIn ? 
                <Row className="center-align">
                    <Col s={6} l={4}><Link to="/lists"><Button id="home-list" className="btn-large">LISTS</Button></Link></Col>
                    <Col s={6} l={4}><Link to="/pantry"><Button id="home-pantry" className="btn-large">PANTRY</Button></Link></Col>
                    <Col s={6} l={4}><Link to="/waste"><Button id="home-waste" className="btn-large">WASTE</Button></Link></Col>
                    <Col s={6} l={4}><Link to="/recipes"><Button id="home-recipes" className="btn-large">RECIPES</Button></Link></Col>
                    <Col s={6} l={4}><Link to="/account"><Button id="home-account" className="btn-large">ACCOUNT</Button></Link></Col>
                    <Col s={6} l={4}><Link to="/logout"><Button id="home-logout" className="btn-large">LOGOUT</Button></Link></Col>
                </Row>
                :
                <Row>
                    <Col s={6} l={6}><Link to="/login"><Button id="home-login" className="btn-large">LOGIN</Button></Link></Col>
                    <Col s={6} l={6}><Link to="/signup"><Button id="home-signup" className="btn-large">SIGN-UP</Button></Link></Col>
                </Row>
            }
        </Container>
        );
    }
}

export default Home;