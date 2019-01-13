import React from "react";
import SwitchButton from "./SwitchButton";
import LogoRow from "../LogoRow";
import BackBtn from "../BackBtn";
import { Col } from "react-materialize";

export default props => {
  const { handleSwitch } = props;
  return (
    <React.Fragment>
      <Col s={12}>
        <LogoRow />
        <BackBtn goto="/home" />
      </Col>
      {props.context.lists.length === 0 ? (
        <Col s={12} className="animate-up">
          <SwitchButton
            view="new-list"
            text="NEW LIST"
            onClick={e => handleSwitch(e, 1)}
          />
        </Col>
      ) : (
        <div className="animate-up">
          <Col s={6}>
            <SwitchButton
              view="new-list"
              text="NEW LIST"
              onClick={e => handleSwitch(e, 1)}
            />
          </Col>
          <Col s={6}>
            <SwitchButton
              view="my-lists"
              text="MY LISTS"
              onClick={e => handleSwitch(e, 2)}
            />
          </Col>
        </div>
      )}
    </React.Fragment>
  );
};
