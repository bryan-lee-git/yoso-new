import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  Icon,
  Card,
} from "react-materialize";
import BackBtn from '../../components/BackBtn';
import { UserContext } from "../../App";
import PageHeader from "../../components/PageHeader";
import BottomSpacer from "../../components/BottomSpacer";

class Account extends Component {
  state = {};

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleRedirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/home`} />;
    }

    return (
      <UserContext.Consumer>
        {context => {
          return (
            <Container className="center-align">
              <PageHeader>YOUR INFO</PageHeader>
              <Row>
                <Col s={12}>
                <BackBtn
                  goto="/Home"
                />
                </Col>
              </Row>
              <form>
                <Card
                  id="account-form"
                  className="z-depth-4 rounded animate-up"
                >
                  <Row>
                    <Col s={12}>
                      <Input
                        s={12}
                        l={6}
                        onChange={this.handleInputChange}
                        defaultValue={context.user.first}
                        type="text"
                        label="First Name"
                        name="first"
                        validate
                      />
                      <Input
                        s={12}
                        l={6}
                        onChange={this.handleInputChange}
                        defaultValue={context.user.last}
                        type="text"
                        label="Last Name"
                        name="last"
                        validate
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={12}>
                      <Input
                        s={12}
                        l={6}
                        onChange={this.handleInputChange}
                        defaultValue={context.user.street}
                        offset="s3"
                        type="text"
                        label="Street Address"
                        name="street"
                        validate
                      />
                      <Input
                        s={12}
                        l={6}
                        onChange={this.handleInputChange}
                        defaultValue={context.user.city}
                        offset="s3"
                        type="text"
                        label="City"
                        name="city"
                        validate
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={12}>
                      <Input
                        s={12}
                        l={6}
                        onChange={this.handleInputChange}
                        defaultValue={context.user.state}
                        offset="s3"
                        type="text"
                        label="State"
                        name="state"
                        validate
                      />
                      <Input
                        s={12}
                        l={6}
                        onChange={this.handleInputChange}
                        defaultValue={context.user.zip}
                        offset="s3"
                        type="number"
                        label="Zip Code"
                        name="zip"
                        validate
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={12} l={6}>
                      <Input
                        s={12}
                        onChange={this.handleInputChange}
                        defaultValue={context.user.email}
                        label="Email"
                        type="email"
                        name="email"
                        validate
                      >
                        <Icon>email</Icon>
                      </Input>
                    </Col>
                    <Col s={12} l={6}>
                      <Input
                        s={12}
                        onChange={this.handleInputChange}
                        label="Password"
                        type="password"
                        name="password"
                        validate
                      >
                        <Icon>lock</Icon>
                      </Input>
                    </Col>
                  </Row>
                  <Row>
                    {this.state.first &&
                    this.state.last &&
                    this.state.street &&
                    this.state.city &&
                    this.state.state &&
                    this.state.zip &&
                    this.state.email &&
                    this.state.password ? (
                      <Col s={12}>
                        <Input
                          s={12}
                          onClick={event => {
                            event.preventDefault();
                            context.accountUpdate(
                              this.state,
                              this.handleRedirect
                            );
                          }}
                          className="signup-btn btn btn-large"
                          type="submit"
                        />
                      </Col>
                    ) : (
                      <Col s={12}>
                        <Input
                          s={12}
                          className="signup-btn btn btn-large"
                          type="submit"
                          disabled
                        />
                      </Col>
                    )}
                  </Row>
                </Card>
              </form>
              <BottomSpacer/>
            </Container>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Account;
