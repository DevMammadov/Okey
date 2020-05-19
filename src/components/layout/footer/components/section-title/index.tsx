import React, { FC } from "react";
import { Icon, Typography } from "@material-ui/core";
import { useStyles } from "./section-title.style";

export interface ISectionTitle {
  title: string;
  icon?: string;
}

export const SectionTitle: FC<ISectionTitle> = ({ title, icon }) => {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.sectionTitle}>
      {icon && <Icon className={classes.icon}>{icon}</Icon>}
      <Typography component="span" className={classes.title}>
        {title}
      </Typography>
    </Typography>
  );
};
