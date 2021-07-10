import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
          color: theme.palette.grey[900]
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: theme.palette.grey[900]
        },
    
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.grey[900]
          },
        
      },
    paper: {
      marginTop: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
        
        marginTop: theme.spacing(8),
      margin: theme.spacing(3, 0, 2),
      backgroundColor: theme.palette.grey[900],
      color: '#fff',
      '&:hover': {
        backgroundColor: theme.palette.grey[800],
        
    }
    },
    returnBtn:{
        fontSize:theme.spacing(1.5),
        
    },
    overrides: {
        MuiFormLabel: {
          root: {
            "&$focused": {
              backgroundColor: theme.palette.grey[900],
             
            }
          }, 
          
         
        }
      },
      input:{
          fontSize:theme.spacing(2)
      }
    

    
  }))






