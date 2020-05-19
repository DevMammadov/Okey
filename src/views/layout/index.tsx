import React, { FC, useEffect } from "react";
import AppRouter from "routes/app-router";
import { Header, Menu, Footer } from "components/layout";
import { useStyles } from "./layout.style";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { layoutActions } from "./store/action";
import { ICategory } from "types";

interface ILayoutPage {
  category: ICategory[];
  getCategory(): void;
}

const App: FC<ILayoutPage> = ({ category, getCategory }) => {
  const classes = useStyles();

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <header className={classes.header}>
          <Header />
        </header>
        <nav className={classes.menuNav}>
          <Menu category={category} />
        </nav>
        <main className={classes.main}>
          <section>
            <AppRouter />
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
export default connect(mapStateToProps, layoutActions)(App);
