import React from "react";
import { Container, Row, Col, Button } from "react-materialize";
import { Link } from "react-router-dom";

const MyLists = props => {
  return (
    <div>
      <Container>
        <Row>
          <br />
          <br />
          <Col s={12} l={6} offset="l3">
            <img
              id="home-logo"
              alt="yoso logo"
              src="./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"
            />
          </Col>
        </Row>
        <Row className="btn-row">
          <Col s={12}>
            <Button id="new-list-btn" className="btn btn-large">
              Create A New List
            </Button>
          </Col>
          {!props.lists ? (
            <div>
              <br />
              <br />
              <br />
              <h2 className="white-text center-align">
                You haven't created any lists yet!
              </h2>
            </div>
          ) : (
            <div>
              <Col className="animate-up" s={12} l={6}>
                <Link to="/newlist">
                  <Button
                    id="new-list"
                    className="home-btn z-depth-5 btn-large"
                  >
                    NEW LIST
                  </Button>
                </Link>
              </Col>
              <Col className="animate-up-2" s={12} l={6}>
                <Link to="/mylists">
                  <Button
                    id="my-lists"
                    className="home-btn z-depth-5 btn-large"
                  >
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
};

export default MyLists;