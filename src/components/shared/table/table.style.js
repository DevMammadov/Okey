import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    table: {},
    tableRow: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
    tableRowCollapse: {
      "&:nth-of-type(even)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
    tableCell: {
      width: "50%",
      padding: theme.spacing(0.8),
      fontSize: 14,
    },
    collapseCell: {
      padding: 0,
    },
    moreButton: {
      width: "100%",
      background: theme.palette.action.hover,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
