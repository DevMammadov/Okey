import React from "react";
import AppRouter from "routes/app-router";
import { Header, Aside } from "components/layout";
import { useStyles } from "./layout.style";

interface IProps {
  props: any[];
}

export const App = ({ ...props }: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <Header />
      </header>
      <main>
        <aside>
          <Aside />
        </aside>
        <section>
          <AppRouter />
        </section>
      </main>
    </div>
  );
};
