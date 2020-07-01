import React, { FC } from "react";
import { Chip, Icon, Avatar } from "@material-ui/core";
import { useTranslator } from "localization";
import { useStyles } from "./chip-bar.style";

interface IChipBar {
  atStock: boolean;
  atStore: boolean;
}

export const ChipBar: FC<IChipBar> = ({ atStock, atStore }) => {
  const lang = useTranslator("item");
  const classes = useStyles();
  const stockInfo = atStock
    ? { icon: "storage", label: lang.atStock }
    : { icon: "sentiment_dissatisfied", label: lang.notAtStock };
  const storeInfo = atStore
    ? { icon: "home", label: lang.atStore }
    : { icon: "airplanemode_active", label: lang.byOrder };

  return (
    <div className={classes.container}>
      <Chip
        avatar={
          <Avatar>
            <Icon>{storeInfo.icon}</Icon>
          </Avatar>
        }
        className={atStore ? classes.green : classes.blue}
        variant="outlined"
        label={storeInfo.label}
      />
      <Chip
        avatar={
          <Avatar>
            <Icon>{stockInfo.icon}</Icon>
          </Avatar>
        }
        className={atStock ? classes.green : classes.red}
        variant="outlined"
        label={stockInfo.label}
      />
    </div>
  );
};
