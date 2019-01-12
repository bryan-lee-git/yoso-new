import React from "react";
import NoListWarning from "./NoListWarning";
import SwitchButton from "./SwitchButton";
import LogoRow from "../LogoRow";

export default props => {
  const { handleSwitch, handleRerender } = props;
  console.log(`inside listswitch, here's props: `, props);
  return (
    <React.Fragment>
      <LogoRow goto="/home" />
      {props.stuff.lists.length === 0 ? (
        <div>
          <NoListWarning />
          <SwitchButton
            view="new-list"
            value={1}
            text="NEW LIST"
            onClick={handleSwitch}
          />
        </div>
      ) : (
        <div>
          <SwitchButton
            view="new-list"
            text="NEW LIST"
            value={1}
            onClick={handleSwitch}
          />
          <SwitchButton
            view="my-lists"
            value={2}
            text="MY LISTS"
            onClick={handleSwitch}
          />
        </div>
      )}
    </React.Fragment>
  );
};
