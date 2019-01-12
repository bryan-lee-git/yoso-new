import React from "react";
import NoListWarning from "./NoListWarning";
import SwitchButton from "./SwitchButton";
import LogoRow from "../LogoRow";

export default props => {
  const { handleSwitch } = props;
  console.log(`inside listswitch, here's props: `, props);
  return (
    <React.Fragment>
      <LogoRow goto="/home" />
      {props.context.lists.length === 0 ? (
        <div>
          <NoListWarning />
          <SwitchButton
            view="new-list"
            value={1}
            text="NEW LIST"
            onClick={e => handleSwitch(e, 1)}
          />
        </div>
      ) : (
        <div>
          <SwitchButton
            view="new-list"
            text="NEW LIST"
            onClick={e => handleSwitch(e, 1)}
          />
          <SwitchButton
            view="my-lists"
            text="MY LISTS"
            onClick={e => handleSwitch(e, 2)}
          />
        </div>
      )}
    </React.Fragment>
  );
};
