import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from '@material-ui/core/TextField';

const style = {
    margin: 15,
};

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: "column",
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

 function Loginold(props) {

    const classes = useStyles();

    /*const handleClick = event =>  {
        //event.preventDefault();
        props.history.push("/");
    }*/
    const handleRegisterClick = event =>  {
        props.history.push("/register");
     }
    const handleChange = event =>  {
        console.log("c");
    }
    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <div>
            <MuiThemeProvider>
             <div>
                <AppBar title="Login" />
                <form  noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <br />
                    <br />
                    <TextField 
                        id="username"
                        label="Username"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange = {handleChange('username')}
                    />
                    <br />
                    <TextField 
                        id="password"
                        label="Password"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange = {handleChange('password')}
                    />
                    <br />
                    <br />
                    <br />
                    <RaisedButton label="Login" primary={true} style={style} type="submit"/>
                    <RaisedButton label="Sign Up" primary={true} style={style} 
                        onClick={handleRegisterClick} 
                    />
                </form>
             </div>
            </MuiThemeProvider>
        </div>
    );

}
export default withRouter(Loginold);