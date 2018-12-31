import React, {Component} from 'react';
import { Container, Row, Col, Button, Modal, Input } from 'react-materialize';
import { Link, Redirect } from "react-router-dom";
import $ from "jquery";

class Landing extends Component {

    state = {}

    handleRedirect = () => {
        this.setState({
            redirect: true,
        });
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    removeOverlay = () => {
        document.getElementById("materialize-modal-overlay-1").remove();
    }

    handleSignIn = e => {
        e.preventDefault();
        this.props.signIn(this.state, this.handleRedirect);
        this.removeOverlay();
    }

    render() {

        // REDIRECT ONCE SUCCESSFULLY LOGGED IN
        if (this.state.redirect){
            return <Redirect to={`/home`} />
        }

        return (
            <Container className="center-align">
                {/* LOGO ROW */}
                <Row>
                    <br/>
                    <Col s={6} offset="s3">
                        <img id="home-logo" alt="yoso logo" src="./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"></img>            
                    </Col>
                </Row>
                {/* LANDING BUTTON ROW */}
                <Row className="animate-up">
                    <Col s={12} m={4}>
                        <Link to="/about"><Button id="home-learn" className="home-btn z-depth-5 btn-large">ABOUT YOSO</Button></Link>
                    </Col>
                    {/* LOGIN MODAL */}
                    <Modal className="modal" header='Enter Your Credentials to Login!' bottomSheet trigger={
                        <Col s={12} m={4}>
                            <Button onClick={this.handleModal} id="home-login" className="home-btn z-depth-5 btn-large">LOGIN</Button>
                        </Col>
                    }>
                        <Input onChange={this.handleInputChange} label="Email Address" type="email" name="email"></Input>
                        <Input onChange={this.handleInputChange} label="Password" type="password" name="password"></Input>
                        
                        {/* CONDITION LOGIC FOR ENABLING AND DISABLING THE SUBMIT BUTTON */}
                        {this.state.email && this.state.password
                            ? <Col s={12}>
                                <Input s={12} onClick={this.handleSignIn} className="modal-action modal-close landing-login btn btn-large" type="submit"></Input>
                            </Col> 
                            : <Col s={12}>
                                <Input s={12} className="btn btn-large" type="submit" disabled></Input>
                            </Col>
                        }
                    </Modal>
                    <Col s={12} m={4}><Link to="/signup">
                        <Button id="home-signup" className="home-btn z-depth-5 btn-large">SIGN-UP</Button></Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Landing;