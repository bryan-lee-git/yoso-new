import React from "react";

import { UserContext } from "../../App";
import ListConduit from "../../components/ListComponents/ListConduit";

const Lists = () => (
  <UserContext.Consumer>
    {context => {
      return <ListConduit user={context.user} />;
    }}
  </UserContext.Consumer>
);

export default Lists;
