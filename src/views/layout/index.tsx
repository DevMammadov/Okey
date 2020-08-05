import React, { FC, useEffect } from "react";
import AppRouter from "routes/app-router";
import { Header, Menu, Footer } from "components/layout";
import { useStyles } from "./layout.style";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { layoutActions } from "./store/action";
import { ICategoryList, ICategory } from "types";
import { withWidth, isWidthUp } from "@material-ui/core";

interface ILayoutPage {
  categoryList: ICategoryList[];
  categories: ICategory[];
  getCategory(): void;
  width: any;
}

const App: FC<ILayoutPage> = ({ categoryList, getCategory, categories, width }) => {
  const classes = useStyles();

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <header className={classes.header}>
          <Header categoryList={categoryList} />
        </header>
        {!isWidthUp(width, "sm") && (
          <nav className={classes.menuNav}>
            <Menu categoryList={categoryList} />
          </nav>
        )}
        <main className={classes.main}>
          <section>
            <AppRouter category={categories} />
          </section>
        </main>
      </div>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({ ...state.layout });
export default connect(mapStateToProps, layoutActions)(withWidth()(App));
