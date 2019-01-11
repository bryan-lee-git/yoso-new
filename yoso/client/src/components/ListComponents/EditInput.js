import React from "react";
import { Input } from "react-materialize";

export default () => {
  const { name, placeholder, label, type, disabled } = this.props;
  return (
    <React.Fragment>
      {disabled ? (
        <Input
          placeholder={placeholder}
          label={label}
          type={type}
          disabled="disabled"
        >
          {name}
        </Input>
      ) : (
        <Input placeholder={placeholder} label={label} type={type}>
          {name}
        </Input>
      )}
    </React.Fragment>
  );
};
