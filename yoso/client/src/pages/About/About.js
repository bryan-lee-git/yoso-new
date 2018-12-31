import React from 'react';
import { Container, Row, Col, Card } from "react-materialize";

const About = () => {
    return (
        <Container className="center-align">
            <Row>
                <br/>
                <Col s={6} offset="s3">
                    <img id="home-logo" alt="yoso logo" src="./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"></img>            
                </Col>
            </Row>
            <Row className="animate-up">
                <Col s={12} m={12} l={4}>
                    <Card className="about-card" id="what-card">
                        <h4>What?</h4>
                        <p>
                            Its a smart grocery shopping assistant that...
                            <br/><br/>
                            Helps you quickly create, store, and share your grocery lists and even helps sort and view by store/location.
                            <br/><br/>
                            Learns and proactively adds items to your list based upon when you last shopped and how long items typically last you.
                            <br/><br/>
                            Keeps track of when your food will likely expire to help you use the food you already have and reduce waste.
                        </p>
                        <br/>
                    </Card>
                </Col>
                <Col s={12} m={12} l={4}>
                    <Card className="about-card" id="why-card">
                        <h4>Why?</h4>
                        <p>Ever had a craving, gone to your fridge to fix yourself a nice meal, and then realized that the ingredients you needed had expired?
                        <br/><br/>
                        Ever forgot to check if you needed toilet paper and then had to go back to the store?
                        <br/><br/>
                        Ever felt like an absolute dummy for having to throw away food you forgot to use to before it expired?
                        <br/><br/>
                        We have. <strong>That's why.</strong>
                        </p>
                        <br/>
                    </Card>
                </Col>
                <Col s={12} m={12} l={4}>
                    <Card className="about-card" id="dev-card">
                        <h4>Who?</h4>
                        <Row>
                            <Col s={12}>
                                <h5>Panda Warriors DG is...</h5>                            
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col s={3}>
                                <strong><p>Bryan<br/>Lee</p></strong>
                            </Col>
                            <Col s={3}>
                                <img alt="github logo" width="49px" src="./img/github.png"></img>
                            </Col>
                            <Col s={3}>
                                <strong><p>Eric<br/>Bishop</p></strong>
                            </Col>
                            <Col s={3}>
                                <img alt="github logo" width="49px" src="./img/github.png"></img>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={3}>
                                <strong><p>Jim<br/>Schlader</p></strong>
                            </Col>
                            <Col s={3}>
                                <img alt="github logo" width="49px" src="./img/github.png"></img>
                            </Col>
                            <Col s={3}>
                                <strong><p>Bronson<br/>Bird</p></strong>
                            </Col>
                            <Col s={3}>
                                <img alt="github logo" width="49px" src="./img/github.png"></img>
                            </Col>
                        </Row>
                        <br/>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
