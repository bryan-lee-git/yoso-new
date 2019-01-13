import React from "react";
import { Button } from "react-materialize";

export default props => {
  const { view, text, onClick, value } = props;
  return (
    <Button id={view} value={value} className="home-btn z-depth-5 btn-large" onClick={onClick}>
      {text}
    </Button>
  );
};
