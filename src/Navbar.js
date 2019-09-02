import React, { useContext,useEffect } from "react";
import { withRouter} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import {ThemeContext} from "./contexts/ThemeContext";
import {LoginContext} from "./contexts/LoginContext";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import SettingInputComponent from "@material-ui/icons/SettingsInputComponent"
import BrightnessMedium from "@material-ui/icons/BrightnessMedium"
import { Auth } from "aws-amplify";


function Navbar(props){

    const {isDarkMode,toggleTheme} = useContext(ThemeContext);
    const {isAuthenticated,toggleAuthenticated,toggleAuthenticating} = useContext(LoginContext);
    const { classes } = props;
    
    useEffect( () => {
        async function performAuth() {
          try {
            await Auth.currentSession();
            console.log("Current session:Auth " +isAuthenticated )
            props.history.push("/nodedetails")
            toggleAuthenticated(true);
            toggleAuthenticating(false);
          } catch(e) {
            if (e !== 'No current user') {
              toggleAuthenticated(false);
              toggleAuthenticating(false);
              alert("Please sign in again.");
              props.history.push("/")
            }
          }
          
        }
        performAuth();
      },[]);

    const handleLogout = async event => {
        await Auth.signOut();
        toggleAuthenticated(false);
        props.history.push("/")
    }

    const handleToggleTheme = () => {
        toggleTheme(!isDarkMode);
    }
      
    return (
        
        <div className={classes.root}>
        { 
              isAuthenticated ? (
            <>  {console.log("Authenticated " + isAuthenticated)}
                <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color='inherit'>
                            <BrightnessMedium />
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color='inherit'>
                            Theme 
                        </Typography>
                        <Switch  onChange={handleToggleTheme}/>
                        <div className={classes.grow} />
                        <IconButton className={classes.menuButton} color='inherit'>
                            <SettingInputComponent />
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color='inherit'> HFC Upgrade</Typography>
                        <div className={classes.grow} />
                        <IconButton className={classes.menuButton} color='inherit' onClick={handleLogout}>
                            <LockOutlinedIcon />
                        </IconButton>
                         <Typography variant="h6">Sign Out</Typography>
                    </Toolbar>
                </AppBar>
            </> )
             : (
                <>
                    {console.log(isAuthenticated)}
                    <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
                        <Toolbar>
                            <IconButton className={classes.menuButton} color='inherit'>
                                <BrightnessMedium />
                            </IconButton>
                            <Typography className={classes.title} variant='h6' color='inherit'>
                                Theme 
                            </Typography>  
                            <Switch  onChange={handleToggleTheme}/>
                            <div className={classes.grow} />
                            <IconButton className={classes.menuButton} color='inherit'>
                                <SettingInputComponent />
                            </IconButton>
                            <Typography className={classes.title} variant='h6' color='inherit'> HFC Upgrade</Typography>
                            <div className={classes.grow} />
                            <Typography variant="h6">Sign In</Typography>
                        </Toolbar>
                    </AppBar>
                </>
                ) }
                 {console.log("Navbar Refresh")}
            </div>

    );
        
}
export default withRouter(withStyles(styles)(Navbar));
