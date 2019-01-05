import React, { Component } from "react";
import { Card, Row, Col, Button, Icon, Table } from "react-materialize";
import ItemAPI from "../utilities/ItemAPI";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listId: props.listId,
      items: [],
      update: false
    };
  }

  componentDidMount() {
    console.log(`here's the list to search for: `, this.state.listId);
    ItemAPI.getItems(this.state.listId).then(items =>
      this.setState({
        items: items.data
      })
    );
  }

  handleClick = e => {
    e.preventDefault();
    console.log(`this is: `, this);
    console.log(`here's props: `, this.props.listId);
    const { id } = e.target;
    const { name } = e.target.dataset;
    console.log(
      `Here's the click case name: ${name}, listId: ${
        this.state.listId
      }, and id: ${id} and the event: `,
      e.target
    );
    switch (name) {
      case "edit":
        break;
      case "description":
        break;
      case "info":
        break;
      case "delete":
        ItemAPI.deleteItem(this.state.listId, id).then(res =>
          this.setState({
            update: !this.state.update
          })
        );

        break;
      default:
        console.log(`I don't know what to do with that click!`);
    }
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      <tr key={index}>
        <td className="white-text">{item.name}</td>

        <td>
          <i
            id={item.id}
            listid={this.state.listId}
            data-name="edit"
            className="material-icons waves-effect waves-light btn-small"
            onClick={this.handleClick}
          >
            edit
          </i>
        </td>
        <td>
          <i
            id={item.id}
            listid={this.state.listId}
            data-name="description"
            className="material-icons waves-effect waves-light btn-small"
            onClick={this.handleClick}
          >
            description
          </i>
        </td>
        <td>
          <i
            id={item.id}
            listid={this.state.listId}
            data-name="info"
            className="material-icons waves-effect waves-light btn-small "
            onClick={this.handleClick}
          >
            info
          </i>
        </td>
        <td>
          <i
            id={item.id}
            listid={this.state.listId}
            data-name="delete"
            className="material-icons waves-effect waves-light btn-small"
            onClick={this.handleClick}
          >
            delete
          </i>
        </td>
      </tr>
    ));
    return (
      <div>
        <Row>
          <Col s={8} offset="s2">
            <table className="collection-item left-align blue-grey darken-1 z-depth-4">
              <tbody>{listItems}</tbody>
            </table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListItem;
