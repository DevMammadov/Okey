import React, { FC } from "react";
import { useStyles } from "./checkbox.style";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@material-ui/core";
import clsx from "clsx";

export interface ICheckbox {
  checked: boolean;
  onChange(checked: boolean): void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Checkbox: FC<ICheckbox> = ({ checked = false, onChange, className, label, disabled = false }) => {
  const styles = useStyles();

  return (
    <FormControlLabel
      className={clsx(className)}
      classes={{ label: clsx(styles.label, checked && styles.labelChecked) }}
      disabled={disabled}
      control={
        <MuiCheckbox
          checked={checked}
          onChange={(e: any) => onChange(e.target.checked)}
          name="checkedB"
          color="primary"
          classes={{ root: styles.checkbox, checked: styles.checked }}
          disabled={disabled}
        />
      }
      label={label}
    />
  );
};
