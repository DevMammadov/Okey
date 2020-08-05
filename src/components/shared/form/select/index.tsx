import React, { FC, useState } from "react";
import { MenuItem, Select as MuiSelect } from "@material-ui/core";
import { useStyles } from "./select.style";
import clsx from "clsx";

export interface ISelectData {
  value: number | string;
  name: string;
}

export interface ISelect {
  selected?: number | string;
  data?: ISelectData[];
  onChange(value: number | string): void;
  dispabled?: boolean;
  className?: string;
}

export const Select: FC<ISelect> = ({ data = [], selected, onChange, className, dispabled = false }) => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as number);
  };

  return (
    <div className={clsx(className, styles.selectContainer)}>
      <MuiSelect
        labelId="controlled-open-select-label"
        id="controlled-open-select"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={selected}
        onChange={handleChange}
        classes={{ select: styles.select }}
        className={styles.root}
        disabled={dispabled}
        variant="outlined"
      >
        {data?.map((d, index) => (
          <MenuItem key={index} value={d.value}>
            {d.name}
          </MenuItem>
        ))}
      </MuiSelect>
    </div>
  );
};
