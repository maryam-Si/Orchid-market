import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { toast } from "react-toastify";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { styles } from "./styles";
import { login } from "../../../api/auth";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../store/actions/LoadingActions";
import WithLoading from "../../../components/WithLoading";
// import WithLoading from "../../../components/WithLoading";

const useStyles = styles;

export default function LoginAdmin() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if ((email, password)) {
      setResult(login(email, password));
      dispatch(setLoading(true));
    } else {
      if (!email) {
        toast.error("نام کاربری الزامی می باشد.");
      }
      if (!password) {
        toast.error("گذرواژه الزامی می باشد");
      }
    }
  };

  useEffect(() => {
    if (result) {
      result
        .then((res) => {
          if (res) {
            dispatch(setLoading(false));

            console.log(`result:${result}`);
            localStorage.setItem("token", res.data.token);

            history.push("/admin/panel-products");
          }
        })
        .catch(function (error) {
          dispatch(setLoading(false));

          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            toast.error(error.response.data.error);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            toast.error(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            toast.error("Error", error.message);
          }
        });
    }
  }, [result, dispatch, history]);
  /**
 * {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
 */

  return (
    <WithLoading>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
            ورود به پنل مدیریت فروشگاه
          </Typography>
          <form className={classes.root} onSubmit={handleLogin}>
            <TextField
              margin="normal"
              fullWidth
              type="email"
              id="userName"
              label="نام کاربری"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.input}
              value={email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.input}
              value={password}
              onChange={handleChange}
            />
            <Grid
              container
              spacing={4}
              justifyContent="flex-end"
              alignItems="baseline"
            >
              <Grid item xs={12} md={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  ورود
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  type="button"
                  variant="text"
                  color="primary"
                  component={Link}
                  to="/"
                  className={classes.returnBtn}
                >
                  بازگشت به سایت
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </WithLoading>
  );
}
