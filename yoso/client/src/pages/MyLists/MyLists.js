import React from "react";
import { Container, Row, Col, Button, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const MyLists = () => {
  return (
    <MyContext.Consumer>
      {context => {
        console.log(`context on mylists is is `, context);
        return (
          <div>
            <Container>
              <Row>
                <br />
                <Col s={12} l={8} offset="l2">
                  <img
                    id="home-logo"
                    alt="yoso logo"
                    src="./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"
                  />
                </Col>
                <Col s={12}>
                  <Link to="/home">
                    <Button className="back-btn">
                      <Icon>arrow_back</Icon>
                    </Button>
                  </Link>
                </Col>
              </Row>
              <Row className="btn-row">
                {context.state.lists.length === 0 ? (
                  <div>
                    <Col className="animate-up" s={12} l={12}>
                      <Link to="/newlist">
                        <Button id="new-list" className="home-btn z-depth-5 btn-large">
                          Create Your First List
                        </Button>
                      </Link>
                      <br />
                      <br />
                    </Col>
                  </div>
                ) : (
                  <div>
                    <Col className="animate-up" s={12} l={6}>
                      <Link to="/newlist">
                        <Button
                          id="new-list"
                          className="home-btn z-depth-5 btn-large">
                          NEW LIST
                        </Button>
                      </Link>
                      <br />
                      <br />
                    </Col>
                    <Col className="animate-up-2" s={12} l={6}>
                      <Link to="/mylists">
                        <Button
                          id="my-lists"
                          className="home-btn z-depth-5 btn-large">
                          MY LISTS
                        </Button>
                      </Link>
                    </Col>
                  </div>
                )}
              </Row>
            </Container>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default MyLists;
