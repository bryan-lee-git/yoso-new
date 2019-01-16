import React from "react";
import { Row, Col } from "react-materialize";

export default props => {
  return (
    <React.Fragment>
      <Row>
        <br />
        <br />

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
