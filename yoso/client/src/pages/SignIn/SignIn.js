import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  Icon,
  Card,
  Button
} from "react-materialize";

class SignIn extends Component {
  state = {
    redirect: false
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  handleSignIn = e => {
    e.preventDefault();
    this.props.signIn(this.state, this.handleRedirect);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/home`} />;
    }
    return (
      <Container className="center-align">
        <Container>
          <br />
          <Row>
            <Col s={12}>
              <h1 className="white-text fade-in">SIGN IN</h1>
            </Col>
          </Row>

          <Col s={12} m={12} />
          <form>
            <Container className="btn-row">
              <Card id="signin-form" className="rounded animate-up z-depth-4">
                <h5 className="fade-in">ENTER A VALID EMAIL AND PASSWORD</h5>
                <br />
                <Row>
                  <Col s={12} l={12}>
                    <Input
                      s={12}
                      onChange={this.handleInputChange}
                      label="Email"
                      type="email"
                      name="email"
                      validate
                    >
                      <Icon>email</Icon>
                    </Input>
                  </Col>
                  <Col s={12} l={12}>
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
                  {this.state.email && this.state.password ? (
                    <Col s={12} m={12}>
                      <Input
                        s={12}
                        onClick={this.handleSignIn}
                        className="signin-btn btn btn-large"
                        type="submit"
                      />
                    </Col>
                  ) : (
                    <Col s={12} m={12}>
                      <Input
                        s={12}
                        onClick={this.handleSignIn}
                        className="signin-btn btn btn-large"
                        type="submit"
                        disabled
                      />
                    </Col>
                  )}
                </Row>
              </Card>

              <Card className="rounded animate-down z-depth-4">
                <h5 className="fade-in">OR CLICK HERE TO SIGN UP</h5>
                <Link to={this.props.signUpPath}>
                  <Button s={6} className="signin-btn btn btn-large">
                    SIGN UP
                  </Button>
                </Link>
              </Card>
            </Container>
          </form>
        </Container>
      </Container>
    );
  }
}

export default SignIn;
