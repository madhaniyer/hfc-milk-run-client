import React, { useContext } from "react";
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
import { Auth } from "aws-amplify";


function Navbar(props){

    const {isDarkMode,toggleTheme} = useContext(ThemeContext);
    const {isAuthenticated,toggleAuthenticated} = useContext(LoginContext);
    const { classes } = props;
    
    const handleLogout = async event => {
        await Auth.signOut();
        toggleAuthenticated();
    }
      
    return (
        
        <div className={classes.root}>
        { 
              isAuthenticated ? (
            <>  {console.log(isAuthenticated)}
                <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color='inherit'>
                            <span role="img" aria-label="milk-run">🥛</span>
                        </IconButton>
                        <Typography className={classes.title} variant='h6' color='inherit'>
                            Theme 
                        </Typography>
                        <Switch  onChange={toggleTheme}/>
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
                                <span role="img" aria-label="milk-run">🥛</span>
                            </IconButton>
                            <Typography className={classes.title} variant='h6' color='inherit'>
                                Theme 
                            </Typography>
                            
                            <Switch  onChange={toggleTheme}/>
                            <div className={classes.grow} />
                        </Toolbar>
                    </AppBar>
                </>
                ) }
                 {console.log("Navbar Refresh")}
            </div>

    );
        
}
export default withStyles(styles)(Navbar);
