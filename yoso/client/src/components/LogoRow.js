import React from "react";
import { Row, Col, Button, Icon } from "react-materialize";
import { Link } from "react-router-dom";

export default props => {
  //console.log(`inside logorow, here's props: `, props);
  const { goto } = props;
  return (
    <React.Fragment>
      <Row>
        <br />
        <br />
        <Col s={1}>
          <Link to={goto}>
            <br />
            <br />
            <br />
            <Button>
              <Icon>arrow_back</Icon>
            </Button>
          </Link>
        </Col>
        <Col s={6} l={6} offset="l2">
          <img
            id="home-logo"
            alt="yoso logo"
            src="./img/Yoso-Logo-Large-Text-White-Tag-Shadow.svg"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};
