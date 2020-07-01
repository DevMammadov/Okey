import React, { FC } from "react";
import { useStyles } from "./service-bar.style";
import { Icon } from "@material-ui/core";
import { IService } from "types";
import clsx from "clsx";

export interface IServiceBar {
  services: IService[];
  className?: string;
}

export const ServiceBar: FC<IServiceBar> = ({ services, className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.serviceBar, className)}>
      {services.map((service: IService) => (
        <div key={service.id} className={classes.service}>
          <Icon className={classes.icon}>{service.icon}</Icon>
          <span>{service.text}</span>
        </div>
      ))}
    </div>
  );
};
