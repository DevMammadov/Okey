import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      "& .MuiTableCell-root": {
        padding: theme.spacing(1),
      },
    },
    imageCell: {
      width: 100,
    },
    image: {
      height: 100,
      width: 100,
      objectFit: "contain",
    },
    money: {
      fontFamily: "JISAZNBold",
    },
    removeButton: {
      color: theme.palette.danger.main,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
