import React, { Component } from "react";
import ShowItems from "../../components/ListComponents/ShowItems";

import {
  Collapsible,
  Col,
  Row,
  CollapsibleItem,
  Container,
  Button,
  Icon
} from "react-materialize";
import ListAPI from "../../utilities/ListAPI";

import ItemAPI from "../../utilities/ItemAPI";
import BackBtn from "../BackBtn";

export default class UserLists extends Component {
  state = {};

  handleDeleteList = (e, userId, listId, cb) => {
    e.preventDefault();
    console.log(
      `Delete button pushed inside userlist to delete a list id# ${listId}`
    );
    ListAPI.deleteList(userId, listId).then(response => cb(userId));
  };
  handleDeleteItem = (e, userId, listId, itemId, cb) => {
    e.preventDefault();
    console.log(
      `Delete button pushed inside userlist to delete a list id# ${listId} and item id: ${itemId}`
    );
    ItemAPI.deleteItem(listId, itemId).then(response => cb(userId));
  };
  getItems = id => {
    ItemAPI.getItems(id).then(res => {
      console.log(
        `From getlists at ListConduit, here's the user's lists: `,
        res
      );
      this.setState({
        items: res.data
      });
    });
  };
  render() {
    console.log(
      `inside the render method of userlists, here's props: `,
      this.props
    );

    const lists = this.props.context.lists.map((list, index) => (
      <Collapsible key={index} accordion defaultActiveKey={1}>
        <CollapsibleItem header={list.name}>
          <Col s={3}>
            <Button
              onClick={e =>
                this.handleDeleteList(
                  e,
                  this.props.context.id,
                  list.id,
                  this.props.getLists
                )
              }
            >
              {" "}
              <Icon data-index={index}>delete_forever</Icon>
              <br />
            </Button>
          </Col>
          <Col s={3} offset="6" className="right">
            <Button>
              <Icon data-index={index}>send</Icon>
            </Button>
          </Col>

          <ShowItems
            key={list.id}
            listId={list.id}
            name={list.name}
            currentList={list.lists}
            getItems={this.getItems}
            onClick={e =>
              this.handleDeleteItem(e, this.props.context.id, list.id, this.key)
            }
          />
        </CollapsibleItem>
      </Collapsible>
    ));
    return (
      <Container className="center-align">
        <Row>
          <Col s={12}>
            <h1 className="white-text center-align">
              {this.props.context.first.toUpperCase()}'S LISTS
            </h1>
          </Col>
        </Row>
        <BackBtn
          goto="/lists"
          handleSwitch={this.props.handleSwitch}
          page={0}
        />
        <Row>{lists}</Row>
      </Container>
    );
  }
}
