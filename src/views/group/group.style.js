import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    resultText: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      textAlign: "center",
      color: theme.palette.color.black,
    },
    searchText: {
      color: theme.palette.warning.main,
    },
    pagingContainer: {
      display: "flex",
      justifyContent: "center",
    },
    pagingUl: {
      "& .MuiPaginationItem-root.Mui-selected": {
        background: theme.palette.warning.main,
        color: theme.palette.common.white,
      },
    },
    emptyRequest: {
      textAlign: "center",
      fontWeight: "bold",
      color: theme.palette.color.black,
      padding: theme.spacing(10),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
