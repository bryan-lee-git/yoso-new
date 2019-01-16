import React from "react";
import { Row, Col } from "react-materialize";

export default () => {
  return (
    <React.Fragment>
      <Row>
        <br />
        <Col s={12} l={8} offset="l2">
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
