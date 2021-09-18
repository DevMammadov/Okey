import React, { FC } from "react";
import { useStyles } from "./alert.style";
import { useTranslator } from "localization";
import { Modal, Backdrop, Fade, Button, Paper } from "@material-ui/core";

export interface IAler {
  open: boolean;
  text: string;
  onClose(accept: boolean): void;
}

export const Alert: FC<IAler> = ({ text, open = false, onClose }) => {
  const lang = useTranslator();
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => onClose(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper>
          <div className={classes.paper}>{text}</div>
          <div>
            <Button onClick={() => onClose(true)}>Accept</Button>
            <Button onClick={() => onClose(false)}>Deny</Button>
          </div>
        </Paper>
      </Fade>
    </Modal>
  );
};
