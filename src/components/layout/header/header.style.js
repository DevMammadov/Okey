import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      background: theme.palette.common.white,
      "& .MuiGrid-item": {
        display: "flex",
      },
    },
    gridItem: {
      padding: 0,
    },
    logo: {
      height: "56px",
      width: "130px",
    },
    headerContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    searchContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    icons: {
      display: "flex",
    },
    gridItemSearch: {
      paddingTop: 0,
    },
    infoBar: {
      maxWidth: "280px",
      "& > span": {
        fontSize: "14px",
        fontWeight: "bold",
        color: theme.palette.color.lightBlack,
        display: "flex",
        "& .MuiIcon-root": {
          color: theme.palette.warning.main,
        },
      },
      "& > span + span": { marginTop: "5px" },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      searchContainer: {
        padding: "0 20px",
      },
      root: {
        padding: "8px 16px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      logo: {
        height: "40px",
        width: "100px",
      },
      root: {
        background: theme.palette.color.lightBlack,
        "& .MuiGrid-item": {
          paddingBottom: theme.spacing(1),
          justifyContent: "space-between",
        },
      },
      mobileSearchButton: {
        color: theme.palette.common.white,
      },
      headerContainer: {
        justifyContent: "flex-end",
      },
      searchContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
      },
    },
  };
});
