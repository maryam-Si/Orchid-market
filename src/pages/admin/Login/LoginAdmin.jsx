import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {styles} from './styles'

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
        <form className={classes.root} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="نام کاربری" 
            name="email"
            autoComplete="email"
            autoFocus
            className={classes.input} 
            
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز عبور" 
            type="password"
            id="password"
            autoComplete="current-password"
            className={classes.input} 
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