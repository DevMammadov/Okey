import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { useStyles } from "./contacts.style";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";
import { SectionTitle } from "../section-title";

export const Contacts = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <SectionTitle title="Əlaqə nömrələri" icon="stay_current_portrait" />
        <Typography component="div">*2020</Typography>
      </div>
      <div>
        <SectionTitle title="Email" icon="email" />
        <Typography component="div">store@okey.az</Typography>
      </div>
      <div>
        <SectionTitle title="Sosial şəbəkələrimiz" icon="public" />
        <div className={classes.socialIcons}>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <YouTube />
          </IconButton>
        </div>
      </div>
    </>
  );
};
