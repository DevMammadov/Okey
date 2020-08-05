import React, { FC, useState } from "react";
import { useStyles } from "./search-bar.style";
import {
  Button,
  Icon,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
  IconButton,
} from "@material-ui/core";
import withWidth, { isWidthUp, WithWidthProps } from "@material-ui/core/withWidth";
import { ISearchResult } from "../../types";
import { Price } from "components/shared/card/components";
import { useHistory } from "react-router";
import { makeProductLink } from "routes/makeLink";
import { useTranslator } from "localization";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import SearchIcon from "@material-ui/icons/Search";

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
  const history = useHistory();
  const lang = useTranslator("main");

  const handleChange = (e: any) => {
    setValue(e.target.value);
    if (e.target.value.length > 0) {
      onSearch(e.target.value);
    }
  };

  const handleCardClick = (product: ISearchResult) => {
    history.push(makeProductLink(product.name, product.category));
    setValue("");
  };

  const handleLookAllClick = () => {
    history.push(`/search/all/${value}`);
    setValue("");
  };

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
            {value.length > 0 && (
              <List component={Paper} className={classes.resultList}>
                {resultList?.map((product) => (
                  <ListItem button key={product.id} onClick={() => handleCardClick(product)}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <img draggable={false} src={product.img} alt={product.name} className={classes.img} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={product.name} secondary={renderPrductListSecondary(product)} />
                  </ListItem>
                ))}
                <ListItem button onClick={handleLookAllClick} className={classes.lookAllButton}>
                  {lang.lookAll} <ArrowRightAltIcon />
                </ListItem>
              </List>
            )}
          </div>
          <Button variant="contained" onClick={handleLookAllClick}>
            {lang.search}
          </Button>
        </div>
      </div>
    );
  };

  const mobileVersion = () => {
    return (
      <div>
        <IconButton onClick={onIconClick} className={classes.mobileSearchButton}>
          <SearchIcon fontSize="large" />
        </IconButton>
      </div>
    );
  };

  const renderShowOnMobile = () => {
    return isWidthUp("sm", width) ? null : pcVersion();
  };

  return showOnMobile ? renderShowOnMobile() : isWidthUp("sm", width) ? pcVersion() : mobileVersion();
};

export default withWidth()(SearchBar);
