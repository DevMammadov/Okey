import React, { FC } from "react";
import { useStyles } from "./alert.style";
import { useTranslator } from "localization";
import { Modal, Backdrop, Fade } from "@material-ui/core";

export interface IAler {}

export const Alert: FC<IAler> = () => {
  const lang = useTranslator();
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={true}
      onClose={() => {}}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>
        <div className={classes.paper}>Alert</div>
      </Fade>
    </Modal>
  );
};
