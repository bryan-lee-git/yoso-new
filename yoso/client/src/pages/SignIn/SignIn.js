import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { Container, Row, Col, Input, Icon, Card } from 'react-materialize';

class SignIn extends Component {

    state = {
        redirect: false,
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleRedirect = () => {
        this.setState({
        redirect: true,
        });
    }

    handleSignIn = e => {
        e.preventDefault();
        this.props.signIn(this.state, this.handleRedirect)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={`/home`} />
        }
        return (
        <Container className="center-align">
            <Container>
            <Row>
                <Col s={12}>
                    <h1 className="white-text fade-in">PLEASE SIGN-IN</h1>
                </Col>
            </Row>
            <form>
                <Card id="signin-form" className="animate-up">
                    <Row>
                        <Col s={12} l={6}><Input s={12} onChange={this.handleInputChange} label="Email" type="email" name="email" validate><Icon>email</Icon></Input></Col>
                        <Col s={12} l={6}><Input s={12} onChange={this.handleInputChange} label="Password" type="password" name="password" validate><Icon>lock</Icon></Input></Col>
                    </Row>
                    <Row>
                    {this.state.email && this.state.password
                        ? <Col s={12}><Input s={12} onClick={this.handleSignIn} className="signin-btn btn btn-large" type="submit"></Input></Col> 
                        : <Col s={12}><Input s={12} onClick={this.handleSignIn} className="signin-btn btn btn-large" type="submit" disabled></Input></Col>
                    }
                    </Row>
                </Card>  
            </form>
            </Container>
        </Container>
        );
    }
}

export default SignIn;