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
    console.log(`inside listconduit, we fired off render! Here's ${view}`);

    return (
      <Container>
        <Row className="btn-row">
          {view === 0 ? (
            <ListSwitch stuff={this.state} handleSwitch={this.handleSwitch} />
          ) : view == 1 ? (
            <NewList view={view} handleSwitch={this.handleSwitch} />
          ) : (
            <UserLists view={view} handleSwitch={this.handleSwitch} />
          )}
        </Row>
      </Container>
    );
  }
}
