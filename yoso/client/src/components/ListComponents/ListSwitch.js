import React from "react";
import NoListWarning from "./NoListWarning";
import SwitchButton from "./SwitchButton";

export default props => {
  const { handleSwitch, handleRerender } = props;
  console.log(`inside listswitch, here's props: `, props);
  return (
    <React.Fragment>
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
            onClick={handleSwitch}
          />
          <SwitchButton
            view="my-lists"
            value={2}
            text="MY LISTS"
            onClick={handleSwitch}
          />
          <SwitchButton
            view="my-lists"
            value={3}
            text="GO SHOPPING"
            onClick={handleSwitch}
          />
        </div>
      )}
    </React.Fragment>
  );
};
