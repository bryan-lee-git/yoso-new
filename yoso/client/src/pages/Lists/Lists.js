import React from "react";

import { UserContext } from "../../App";
import ListConduit from "../../components/ListComponents/ListConduit";

const Lists = () => (
  <UserContext.Consumer>
    {context => {
      console.log(`context on lists is is `, context);
      return <ListConduit user={context.user} />;
    }}
  </UserContext.Consumer>
);

export default Lists;
