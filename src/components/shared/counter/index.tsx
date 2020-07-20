import React, { FC, useState } from "react";
import { useStyles } from "./counter.style";
import { Button } from "@material-ui/core";

export interface ICounter {
  value: number;
  onChange(val: number): void;
}

export const Counter: FC<ICounter> = ({ value, onChange }) => {
  const classes = useStyles();
  const [val, setVal] = useState<number>(value);

  const handleChange = (e: any) => {
    let inputVal = Number(e.target.value);
    if (!isNaN(inputVal) && inputVal <= 1000000) {
      setVal(inputVal);
    }
  };

  const handleDecrement = () => {
    if (val > 0) {
      onChange(val - 1);
      setVal(val - 1);
    }
  };

  const handleIncrement = () => {
    if (val < 1000000) {
      onChange(val + 1);
      setVal(val + 1);
    }
  };

  return (
    <div className={classes.counter}>
      <Button onClick={handleDecrement} variant="contained">
        -
      </Button>
      <input type="text" onBlur={() => onChange(val)} onChange={handleChange} value={val} />
      <Button onClick={handleIncrement} variant="contained">
        +
      </Button>
    </div>
  );
};
