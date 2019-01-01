import React from 'react';
import { Container, Col, Row, Button } from "react-materialize";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const Home = () => {
    return (
        <MyContext.Consumer>
            {(context) => {
                return (
                    <Container>
                        <Row>
                            <br/>
                            <Col s={12} l={6} offset="l3">
                                <img id="home-logo" alt="yoso logo" src="./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"></img>            
                            </Col>
                        </Row>
                        <Row className="btn-row">
                            <Col s={6} l={4}><Link to="/lists"><Button id="home-list" className="animate-up home-btn z-depth-5 btn-large">LISTS</Button></Link></Col>
                            <Col s={6} l={4}><Link to="/pantry"><Button id="home-pantry" className="animate-up-2 home-btn z-depth-5 btn-large">PANTRY</Button></Link></Col>
                            <Col s={6} l={4}><Link to="/waste"><Button id="home-waste" className="animate-up-3 home-btn z-depth-5 btn-large">WASTE</Button></Link></Col>
                            <Col s={6} l={4}><Link to="/recipes"><Button id="home-recipes" className="animate-up-4 home-btn z-depth-5 btn-large">RECIPES</Button></Link></Col>
                            <Col s={6} l={4}><Link to="/account"><Button id="home-account" className="animate-up-5 home-btn z-depth-5 btn-large">ACCOUNT</Button></Link></Col>
                            <Col s={6} l={4}><Button id="home-logout" onClick={() => {context.logOut()}} className="animate-up-6 home-btn z-depth-5 btn-large">LOGOUT</Button></Col>
                        </Row>
                    </Container>
                )
            }}
        </MyContext.Consumer>
    );
}

export default Home;
