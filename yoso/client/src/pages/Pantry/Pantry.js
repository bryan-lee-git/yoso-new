import React, { Component } from "react";
import PantryItem from "../../components/PantryItem";
import { Container } from "react-materialize";
import PageHeader from "../../components/PageHeader";
import BackBtn from "../../components/BackBtn";

class Pantry extends Component {
  render() {
    return (
      <Container className="center-align">
        <PageHeader>IN THE PANTRY</PageHeader>
        <BackBtn goto="home" />
        <div className="animate-up">
          <PantryItem />
        </div>
      </Container>
    );
  }
}

export default Pantry;
