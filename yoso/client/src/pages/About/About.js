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
                <Col s={4}>
                    <Card>
                        <h4>Who?</h4>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card>
                        <h4>What?</h4>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card>
                        <h4>Why?</h4>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
