import React, { FC } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./search-bar.style";
import { Button, Icon, InputBase } from "@material-ui/core";
import withWidth, {
  isWidthUp,
  WithWidthProps
} from "@material-ui/core/withWidth";

interface ISearch extends WithWidthProps {
  width: any;
  showOnMobile?: boolean;
  onIconClick?(): void;
}

const SearchBar: FC<ISearch> = ({
  width,
  showOnMobile = false,
  onIconClick
}) => {
  const classes = useStyles();

  const pcVersion = () => {
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    );
  };

  const mobileVersion = () => {
    return (
      <div>
        <Button onClick={onIconClick} className={classes.mobileSearchButton}>
          <Icon>search</Icon>
        </Button>
      </div>
    );
  };

  const renderShowhowOnMobile = () => {
    return isWidthUp("sm", width) ? null : pcVersion();
  };

  return showOnMobile
    ? renderShowhowOnMobile()
    : isWidthUp("sm", width)
    ? pcVersion()
    : mobileVersion();
};

export default withWidth()(SearchBar);
