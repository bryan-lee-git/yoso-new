import React from "react";
import { Col, Button } from "react-materialize";
import { Link } from "react-router-dom";

export default props => {
  console.log(`inside switchbutton, here's props: `, props);
  const { view, text, onClick, value } = props;
  return (
    <React.Fragment>
      <Col className="animate-up" s={12} l={6}>
        <Button
          id={view}
          value={value}
          className="home-btn z-depth-5 btn-large"
          onClick={onClick}
        >
          {text}
        </Button>

        <br />
        <br />
      </Col>
    </React.Fragment>
  );
};
