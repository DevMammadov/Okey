import React, { FC, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./search-bar.style";
import { Button, Icon, InputBase, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import withWidth, { isWidthUp, WithWidthProps } from "@material-ui/core/withWidth";
import { ISearchResult } from "../../types";
import { Price } from "components/shared/card/components";
import { links } from "routes/links";

interface ISearch extends WithWidthProps {
  width: any;
  showOnMobile?: boolean;
  onIconClick?(): void;
  onSearch?(val: string): void;
  resultList?: ISearchResult[];
}

const SearchBar: FC<ISearch> = ({ width, showOnMobile = false, onIconClick, onSearch = () => {}, resultList }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
    if (e.target.value.length > 3) {
      onSearch(e.target.value);
    }
  };

  console.log(resultList);

  const renderPrductListSecondary = (product: ISearchResult) => {
    return (
      <Price
        discount={product.discount}
        classes={{ discount: classes.discount, price: classes.originalPrice }}
        className={classes.price}
        price={product.price}
        isList={true}
      />
    );
  };

  const pcVersion = () => {
    return (
      <div className={classes.container}>
        <div className={classes.inputGroup}>
          <div className={classes.searchInputContainer}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(e) => handleChange(e)}
                value={value}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {value.length > 3 && (
              <List className={classes.resultList}>
                {resultList?.map((product) => (
                  <ListItem key={product.id}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <img draggable={false} src={product.img} alt={product.name} className={classes.img} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={product.name} secondary={renderPrductListSecondary(product)} />
                  </ListItem>
                ))}
              </List>
            )}
          </div>
          <Button variant="contained"> Axtar </Button>
        </div>
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

  return showOnMobile ? renderShowhowOnMobile() : isWidthUp("sm", width) ? pcVersion() : mobileVersion();
};

export default withWidth()(SearchBar);
