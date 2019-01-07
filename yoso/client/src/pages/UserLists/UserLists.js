import React from "react";
import ShowItems from "../../components/ShowItems";
import { MyContext } from "../../App";
import {
  Collapsible,
  Col,
  CollapsibleItem,
  Container
} from "react-materialize";

export default () => {
  return (
    <MyContext.Consumer>
      {context => {
        console.log(`context is `, context);
        const lists = context.state.lists.map((list, index) => (
          <Collapsible>
            <CollapsibleItem header={context.state.lists[index].name}>
              <ShowItems key={list.id} currentList={list} />
            </CollapsibleItem>
          </Collapsible>
        ));
        return (
          <Container className="center-align">
            <h1 className="white-text center-align">
              {context.state.first.toUpperCase()}'S LISTS
            </h1>
            {lists}
          </Container>
        );
      }}
    </MyContext.Consumer>
  );
};
