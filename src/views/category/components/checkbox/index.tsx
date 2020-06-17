import React, { FC } from "react";
import { FormControlLabel, FormGroup, Checkbox, CheckboxProps } from "@material-ui/core";

export interface ICheckBox {
  label: string;
  labelClass?: string;
}

export const CheckBox: FC<CheckboxProps & ICheckBox> = ({ label, labelClass, ...rest }) => {
  return (
    <FormGroup row>
      <FormControlLabel className={labelClass} control={<Checkbox name="checkedA" {...rest} />} label={label} />
    </FormGroup>
  );
};
