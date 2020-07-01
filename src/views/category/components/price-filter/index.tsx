import React, { FC, useEffect } from "react";
import { OkeySlider, OkeyThumbComponent } from "./okey-slider";
import { useStyles } from "./price-filter.style";
import { TextField } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";

export interface IPriceFilter {
  price: number[];
  onChange(price: number[]): void;
  defaultValue: number[];
}

export const PriceFilter: FC<IPriceFilter> = ({ price, onChange, defaultValue }) => {
  const [value, setValue] = React.useState<number[]>([0, 0]);
  const classes = useStyles();

  useEffect(() => {
    setValue(defaultValue || price);
  }, [price, defaultValue]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleCommit = (event: any, newValue: number | number[]) => {
    if (price && typeof newValue === "object" && newValue[0] < price[0]) {
      setValue([price[0], newValue[1]] as number[]);
      onChange([price[0], newValue[1]] as number[]);
    } else if (price && typeof newValue === "object" && newValue[1] > price[1]) {
      setValue([newValue[0], price[1]] as number[]);
      onChange([newValue[0], price[1]] as number[]);
    } else {
      onChange(value);
    }
  };

  const setStep = (value: number[]) => {
    if (value[1] < 10) {
      return 0.1;
    } else {
      return 1;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.formGroup}>
        <TextField
          onChange={(e) => handleChange(e, [Number(e.target.value), value[1]])}
          value={value[0] ? value[0] : 0}
          id="from-price"
          onBlur={(e) => handleCommit(e, [Number(e.target.value), value[1]])}
          label="from"
          type="number"
        />
        <div className={classes.seperator}>
          <RemoveIcon />
        </div>
        <TextField
          onChange={(e) => handleChange(e, [value[0], Number(e.target.value)])}
          value={value[1] ? value[1] : 0}
          id="to-price"
          onBlur={(e) => handleCommit(e, [value[0], Number(e.target.value)])}
          label="to"
          type="number"
        />
      </div>
      <OkeySlider
        ThumbComponent={OkeyThumbComponent}
        getAriaLabel={(index) => (index === 0 ? "Minimum price" : "Maximum price")}
        onChange={handleChange}
        onChangeCommitted={handleCommit}
        value={value}
        step={setStep(value)}
        max={price ? price[1] : 0}
        min={price ? price[0] : 0}
      />
    </div>
  );
};
