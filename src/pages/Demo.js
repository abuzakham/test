import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import DateRangePicker from "../components/DateRangePicker";

const useStyles = makeStyles(
  {
    root: {
      padding: "20px"
    }
  },
  { name: "PageDemo" }
);

export default function() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <DateRangePicker />
    </Paper>
  );
}
