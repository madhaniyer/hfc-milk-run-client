import React from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
}));

function Register(props) {

    const classes = useStyles();

    const handleClick = event => {
        props.history.push("/");
    }
    const handleChange = event =>  {
        console.log("c");
    }

    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <form  noValidate autoComplete="off">
           <TextField 
                        id="firstName"
                        label="First Name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange = {handleChange('firstName')}
            />
            <br />

           <TextField 
                        id="lastName"
                        label="Last Name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange = {handleChange('lastName')}
            />
            <br />
            <TextField 
                        id="email"
                        label="Email"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange = {handleChange('email')}
            />
           <br/>
           <TextField 
                        id="password"
                        label="Password"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange = {handleChange('password')}
            />           
           <br/>
                <RaisedButton label="Submit" primary={true} style={style} onClick={handleClick}/>
                <RaisedButton label="Login" primary={true} style={style} onClick={handleClick}/>   
          </form>       
          </div>
          
         </MuiThemeProvider>
      </div>
    );

}
const style = {
  margin: 15,
};
export default withRouter(Register);