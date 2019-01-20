import React, { Component } from "react";
import { Container, Row } from "react-materialize";
import ListSwitch from "./ListSwitch";
import NewList from "./NewList";
import UserLists from "./UserLists";
import ShoppingList from "./ShoppingList";
import ListAPI from "../../utilities/ListAPI";
import BottomSpacer from "../BottomSpacer";

export default class ListConduit extends Component {

  state = {
    lists: [],
    view: 0
  };

  componentDidMount() {
    console.log(`inside the conduit, here's props: `, this.props);
    this.getLists(this.props.user.id);
  }

  getLists = id => {
    ListAPI.getLists(id).then(res => {
      console.log(`From getlists at listconduit, here's the user's lists: `, res);
      this.setState({
        lists: res.data,
        id: this.props.user.id,
        first: this.props.user.first
      });
    });
  };

  setShoppingList = (id, view) => {
    this.setState({
      shoppingList: id,
      view: view
    })
  }

  handleSwitch = (e, view) => {
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
        <Row>
          {view === 0 ? (
            <ListSwitch
              context={this.state}
              handleSwitch={this.handleSwitch}
            />
          ) : view === 1 ? (
            <NewList
              context={this.state}
              handleSwitch={this.handleSwitch}
            />
          ) : view === 2 ? (
            <UserLists
              user={this.props.user}
              context={this.state}
              setShoppingList={this.setShoppingList}
              handleSwitch={this.handleSwitch}
              getLists={this.getLists}
            />
          ) : (
            <ShoppingList 
              user={this.props.user}
              context={this.state}
              handleSwitch={this.handleSwitch}
              list={this.state.shoppingList}
            />
          )}
        </Row>
        <BottomSpacer/>
      </Container>
    );
  }
}
