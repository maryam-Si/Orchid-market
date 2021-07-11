import React, { useState }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { toast } from "react-toastify";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {styles} from './styles'
import {login} from '../../../api/auth'
import {useHistory} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = styles;

export default function LoginAdmin() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history =useHistory()

  const handleLogin = (e) => {
    e.preventDefault();
    if ((email, password)) {
      login(email, password)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
         history.push('/admin/panel-products')

         // window.location.reload();
        })
        .catch(function (error) {
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
            toast.error('Error', error.message);
          }
         
        });
    } else {
      if (!email) {
        toast.error('نام کاربری الزامی می باشد.')

        
      }
      if (!password) {
        toast.error("گذرواژه الزامی می باشد")
        
      }
    }
  };

  console.log(localStorage.getItem('token'));
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };


/**
 * {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
 */







  return (
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
            type='email'
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
<Grid container spacing={4} justifyContent='flex-end' alignItems='baseline'>
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
            variant='text'
            color="primary"
            className={classes.returnBtn}>
            بازگشت به سایت
          </Button>
</Grid>
        


</Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}