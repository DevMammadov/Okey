import React, { FC } from "react";
import { Paper, IconButton } from "@material-ui/core";
import { useStyles } from "./filter-bar.style";
import AppsIcon from "@material-ui/icons/Apps";
import ViewListIcon from "@material-ui/icons/ViewList";
import clsx from "clsx";
import { IGroup } from "types";
import { Select, ISelectData, Checkbox } from "components/shared/form";
import { useTranslator } from "localization";

export interface IFilterBar {
  onChangeViewMode(isApp: boolean): void;
  onCheapFilterChange(cheapFirst: boolean): void;
  cheapFirst: boolean;
  isApp: boolean;
  onCategChange?(categId: string): void;
  categList?: IGroup[];
  selectedCateg?: string;
  disableFilter?: boolean;
}

export const FilterBar: FC<IFilterBar> = ({
  onChangeViewMode,
  isApp,
  categList,
  onCategChange = () => {},
  cheapFirst,
  onCheapFilterChange,
  selectedCateg,
  disableFilter = false,
}) => {
  const classes = useStyles();
  const lang = useTranslator("group");

  const selectData = () => {
    let selectData: ISelectData[] = [];
    if (categList?.length) {
      for (let categ of categList) {
        selectData.push({ name: categ.name, value: categ.name });
      }
    }
    return [{ value: "all", name: lang.all }, ...selectData];
  };

  return (
    <Paper className={classes.filterBar}>
      <div className={classes.filters}>
        <Select
          onChange={(categ: string) => onCategChange(categ)}
          data={selectData()}
          selected={selectedCateg || "all"}
          className={classes.select}
          dispabled={disableFilter}
        />
        <Checkbox
          disabled={disableFilter}
          onChange={onCheapFilterChange}
          checked={cheapFirst}
          label={lang.cheapFirst}
        />
      </div>
      <div className={classes.viewModeButtons}>
        <IconButton
          disabled={disableFilter}
          onClick={() => onChangeViewMode(true)}
          className={clsx(isApp && classes.activeViewMode)}
        >
          <AppsIcon />
        </IconButton>
        <IconButton
          disabled={disableFilter}
          onClick={() => onChangeViewMode(false)}
          className={clsx(!isApp && classes.activeViewMode)}
        >
          <ViewListIcon />
        </IconButton>
      </div>
    </Paper>
  );
};
