import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import React from "react";

const Header = ({ title, btnText, handelClick }) => {
  const useStyle = makeStyles({});
  const classes = useStyle();
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h3" component="h3">
            {title}
          </Typography>
        </Grid>
        <Grid>
          <Button variant="contained" color="primary" onClick={handelClick}>
            {btnText}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
