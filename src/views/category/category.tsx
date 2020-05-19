import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import { withRouter, match } from "react-router";
import goodList from "data/goodList.json";
import imgList from "data/images.json";
import categories from "data/category.json";
import { IImages } from "types";
import { Card } from "components/shared";

export interface ICategoryPage {
  match: any;
}

const Category: FC<ICategoryPage> = ({ match }) => {
  console.log(match);

  const findGoods = () => {
    const queryString = match.params.category;
    const categId = categories.filter(
      (c) =>
        c.name.toLowerCase() === queryString.replace("-", " ").toLowerCase()
    )[0]?.id;

    return goodList.filter((good) => good.categoryId === categId);
  };

  const renderImage = (id: number) => {
    let image = imgList.filter((img: IImages) => img.productId === id)[0];
    return image ? image : undefined;
  };

  return (
    <Grid container>
      {findGoods().map((good) => (
        <Card key={good.id} item={good} image={renderImage(good.id)} />
      ))}
    </Grid>
  );
};

export default withRouter(Category);
