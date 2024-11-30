import React from "react";
import { Label, Input } from "reactstrap";

const CheckBox = ({ change, isChecked, value, label }) => {
  return (
    <Label check style={{ marginRight: "10px" }}>
      <Input
        type="checkbox"
        value={value}
        onChange={change}
        checked={isChecked}
      />
      {label}
    </Label>
  );
};

export default CheckBox;

