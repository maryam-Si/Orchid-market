import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
const Header = ({
  title,
  btnText,
  handelClick,
  isOrderHeader,
  recivingStatus,
}) => {
  const useStyle = makeStyles({});
  const classes = useStyle();
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    recivingStatus(event.target.value);
  };
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Grid item md={3}>
          <Typography variant="h3" component="h3">
            {title}
          </Typography>
        </Grid>
        {isOrderHeader ? (
          <Grid
            container
            item
            md={9}
            xs={12}
            className={classes.textParent}
            justifyContent="flex-end"
          >
            <FormControl component="fieldset">
              <RadioGroup value={value} onChange={handleChange}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <FormControlLabel
                      value="recieved"
                      control={<Radio />}
                      label="سفارش های تحویل شده"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      value="waiting"
                      control={<Radio />}
                      label="سفارش های در انتظار ارسال"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
        ) : (
          <Grid
            container
            item
            md={5}
            xs={12}
            justify="flex-end"
            className={classes.textParent}
          >
            <Button variant="contained" color="primary" onClick={handelClick}>
              {btnText}
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Header;
