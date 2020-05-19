import React from "react";
import AppRouter from "routes/app-router";
import { Header, Menu, Footer } from "components/layout";
import { useStyles } from "./layout.style";

interface IProps {
  props: any[];
}

export const App = ({ ...props }: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Header />
      </header>
      <nav className={classes.menuNav}>
        <Menu />
      </nav>
      <main>
        <section>
          <AppRouter />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
