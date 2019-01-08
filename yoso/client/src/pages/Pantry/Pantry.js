import React, { Component } from "react";
import PantryItem from "../../components/PantryItem";
import { Row, Col, Icon, Button } from "react-materialize";
import { Link } from "react-router-dom";

class Pantry extends Component {
  render() {
    return (
      <div className="center-align">
        <br />
        <Row>
          <Col s={3}>
            <Link to="/home">
              <br />
              <br />
              <br />
              <Button>
                <Icon>arrow_back</Icon>
              </Button>
            </Link>
          </Col>
          <Col s={12}>
            <h1 className="white-text fade-in">IN THE PANTRY</h1>
          </Col>
        </Row>
        <div className="animate-up">
          <PantryItem />
        </div>
      </div>
    );
  }
}

export default Pantry;
