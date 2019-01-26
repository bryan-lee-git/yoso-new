import React from "react";
import { UserContext } from "../../App";
import PantryParent from "../../components/PantryComponents/PantryParent";

const Pantry = () => (
  <UserContext.Consumer>
    {context => {
      return <PantryParent user={context} />;
    }}
  </UserContext.Consumer>
);

export default Pantry;
