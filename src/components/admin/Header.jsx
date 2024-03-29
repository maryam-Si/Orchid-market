import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
const Header = ({
  title,
  btnText,
  handelClick,
  isOrderHeader,
  recivingStatus,
  disableButton,
}) => {
  const useStyle = makeStyles({});
  const classes = useStyle();
  const [value, setValue] = React.useState("");
  const [flag, setFlag] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    recivingStatus(event.target.value);
  };
  useEffect(() => {
    if (btnText === "ذخیره" && !disableButton) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [disableButton]);

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
            justifyContent="flex-end"
            className={classes.textParent}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={flag}
              onClick={handelClick}
            >
              {btnText}
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Header;
