import React, { Component } from "react";
import { Container, Row, Col, Button, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import ListConduit from "../../components/ListComponents/ListConduit";

class Lists extends Component {
  state = {
    rerender: false
  };
  handleRerender = () => {
    console.log(`the handleRerender method in lists just fired!`);

    this.setState({
      rerender: !this.state.rerender
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          console.log(`context on lists is is `, context);
          return (
            <div>
              <ListConduit
                state={context.state}
                renderState={this.state.rerender}
                rerender={this.handleRerender}
                handleSwitch={this.handleSwitch}
                view={this.state.view}
              />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Lists;
