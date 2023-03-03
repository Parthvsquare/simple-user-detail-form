import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    gap: theme.spacing(3),
  },
  input: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
  gridContainer: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
  },
  loader: {
    margin: theme.spacing(1),
  },
  successMsg: {
    color: "green",
    marginTop: theme.spacing(2),
  },
  errorMsg: {
    color: "red",
    marginTop: theme.spacing(2),
  },
}));
