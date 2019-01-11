import React, { Component } from "react";
import { MyContext } from "../../App";
import { Container, Row, Col } from "react-materialize";
import LogoRow from "../../components/LogoRow";
import ListSwitch from "./ListSwitch";
import NewList from "./NewList";
import UserLists from "./UserLists";
import ShopList from "./ShopList";
import ListAPI from "../../utilities/ListAPI";

export default class ListConduit extends Component {
  constructor(props) {
    super(props);
    this.state = { lists: ["this list"], view: 0 };
  }

  componentDidMount() {
    console.log(`inside the conduit, here's props: `, this.props.state.id);
    console.log(`inside the conduit, here's props: `, this.props.rerender);
    console.log(`inside the conduit, here's props: `, this.props);
    ListAPI.getLists(this.props.state.id).then(res => {
      console.log(
        `From getlists at listconduit, here's the user's lists: `,
        res
      );
      this.setState({
        lists: res.data
      });
    });
  }

  handleSwitch = e => {
    console.log(
      `here at handleswitch inside lists, here's e.target.value: `,
      e.target.value
    );
    e.preventDefault();
    this.setState({
      view: e.target.value,
      rerender: this.props.renderState
    });
    this.props.rerender();
  };

  render() {
    const { view } = this.state;

    let listView;
    if (view === 0) {
      listView = (
        <ListSwitch stuff={this.props.state} handleSwitch={this.handleSwitch} />
      );
    } else if (view === 1) {
      listView = (
        <NewList
          handleSwitch={this.handleSwitch}
          renderState={this.props.renderState}
        />
      );
    } else if (view === 2) {
      listView = (
        <UserLists
          lists={this.state.lists}
          handleSwitch={this.handleSwitch}
          renderState={this.props.renderState}
        />
      );
    } else if (view === 3) {
      listView = (
        <ShopList
          handleSwitch={this.handleSwitch}
          renderState={this.props.renderState}
        />
      );
    }
    return (
      <Container>
        <LogoRow goto="/lists" />
        <Row className="btn-row">
          <Col s={12}>
            <br />
            <br />
          </Col>
          {listView}
        </Row>
      </Container>
    );
  }
}
