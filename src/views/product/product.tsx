import React from "react";
import {} from "react-redux";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { productPageActions } from "./store/action";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

const Product = () => {
  const params: any = useParams();

  return (
    <section>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              item {params.id}
            </Grid>
            <Grid item xs={6}>
              name
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          attrs
        </Grid>
      </Grid>
    </section>
  );
};

const mapStateToProps = (state: IAppState) => state;

export default connect(mapStateToProps, productPageActions)(Product);
