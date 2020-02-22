import { MenuItem } from "@material-ui/core";
import React, { FC, forwardRef } from "react";

interface IProps {
  img?: string;
  text?: string;
  children?: any;
  props?: any;
}

export const CustomItem: FC<IProps | any> = forwardRef((props, ref) => {
  const { img, text, children } = props;
  return !children ? (
    <MenuItem {...props}>
      <img src={img} alt="#" />
      <div>
        <span>{text}</span>
      </div>
    </MenuItem>
  ) : (
    <MenuItem {...props}>{children}</MenuItem>
  );
});
