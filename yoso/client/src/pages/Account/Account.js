import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Card } from 'react-materialize';
import { MyContext } from "../../App";

class Account extends Component {

    state = {}

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleRedirect = () => {
        this.setState({ redirect: true });
    }

    render() {

        if (this.state.redirect) {
            return (
                <Redirect to={`/home`} />
            )
        }

        return (
            <MyContext.Consumer>
                {(context) => {
                    return (
                        <Container className="center-align">
                            <Container>
                            <Row>
                                <Col s={12}>
                                    <h1 className="white-text fade-in">YOUR ACCOUNT INFO</h1>
                                </Col>
                            </Row>
                            <form>
                                <Card id="account-form" className="animate-up">
                                    <Row>
                                        <Col s={12}>
                                            <Input s={12} l={6} onChange={this.handleInputChange} defaultValue={context.state.first} type="text" label="First Name" name="first" validate></Input>
                                            <Input s={12} l={6} onChange={this.handleInputChange} defaultValue={context.state.last} type="text" label="Last Name" name="last" validate></Input>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col s={12}>
                                            <Input s={12} l={6} onChange={this.handleInputChange} defaultValue={context.state.street} offset="s3" type="text" label="Street Address" name="street" validate></Input>
                                            <Input s={12} l={6} onChange={this.handleInputChange} defaultValue={context.state.city} offset="s3" type="text" label="City" name="city" validate></Input>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col s={12}>
                                            <Input s={12} l={6} onChange={this.handleInputChange} defaultValue={context.state.state} offset="s3" type="text" label="State" name="state" validate></Input>
                                            <Input s={12} l={6} onChange={this.handleInputChange} defaultValue={context.state.zip} offset="s3" type="number" label="Zip Code" name="zip" validate></Input>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col s={12} l={6}>
                                            <Input s={12} onChange={this.handleInputChange} defaultValue={context.state.email} label="Email" type="email" name="email" validate><Icon>email</Icon></Input>
                                        </Col>
                                        <Col s={12} l={6}>
                                            <Input s={12} onChange={this.handleInputChange} label="Password" type="password" name="password" validate><Icon>lock</Icon></Input>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {this.state.first && this.state.last && this.state.street && this.state.city && this.state.state && this.state.zip && this.state.email && this.state.password
                                            ?
                                                <Col s={12}>
                                                    <Input s={12} onClick={(event) => {
                                                        event.preventDefault();
                                                        context.accountUpdate(this.state, this.handleRedirect);
                                                    }} className="signup-btn btn btn-large" type="submit"></Input>
                                                </Col> 
                                            : 
                                                <Col s={12}>
                                                    <Input s={12} className="signup-btn btn btn-large" type="submit" disabled></Input>
                                                </Col>
                                        }
                                    </Row>
                                </Card>  
                            </form>
                            </Container>
                        </Container>
                    )
                }}
            </MyContext.Consumer>
        );
    }
}

export default Account;