import React, { Component } from "react";

import { Container, Row } from "react-materialize";

import ListSwitch from "./ListSwitch";
import NewList from "./NewList";
import UserLists from "./UserLists";

import ListAPI from "../../utilities/ListAPI";

export default class ListConduit extends Component {
  constructor(props) {
    super(props);

    this.state = { lists: [], view: 0 };
  }

  componentDidMount() {
    console.log(`inside the conduit, here's props: `, this.props);

    this.getLists(this.props.user.id);
  }

  getLists = id => {
    ListAPI.getLists(id).then(res => {
      console.log(
        `From getlists at listconduit, here's the user's lists: `,
        res
      );
      this.setState({
        lists: res.data,
        id: this.props.user.id,
        first: this.props.user.first
      });
    });
  };

  handleSwitch = (e, view) => {
    console.log(`here at handleswitch inside lists `);
    e.preventDefault();
    this.setState({
      view: view
    });
  };

  render() {
    const { view } = this.state;
    console.log(`inside listconduit, we fired off render! Here's ${view}`);

    return (
      <Container>
        <Row className="btn-row">
          {view === 0 ? (
            <ListSwitch context={this.state} handleSwitch={this.handleSwitch} />
          ) : view == 1 ? (
            <NewList context={this.state} handleSwitch={this.handleSwitch} />
          ) : (
            <UserLists
              context={this.state}
              handleSwitch={this.handleSwitch}
              getLists={this.getLists}
            />
          )}
        </Row>
      </Container>
    );
  }
}
