import React, { FC } from "react";
import { FormControlLabel, FormGroup, Checkbox, CheckboxProps } from "@material-ui/core";

export interface ICheckBox {
  label: string;
}

export const CheckBox: FC<CheckboxProps & ICheckBox> = ({ label, ...rest }) => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox name="checkedA" {...rest} />} label={label} />
    </FormGroup>
  );
};
