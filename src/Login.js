import React,{useContext,useState} from 'react'
import { withRouter} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";    
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles/FormStyles';
import {LoginContext} from "./contexts/LoginContext";
import { Auth } from "aws-amplify";

function Login(props) {

    const {toggleAuthenticated} = useContext(LoginContext);
    const {classes} = props;

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await Auth.signIn(email,password);
            toggleAuthenticated(true);
            props.history.push("/nodedetails")
            
        } catch(e) {
            alert(e.message);
        }
    }

    const handleEmailChange = event => {
        setEmail(
          [event.target.id] = event.target.value
        );
    }

    const handlePwdChange = event => {
        setPassword(
          [event.target.id] = event.target.value
        );
    }

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Sign In</Typography>
                <Select value="english"> 
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                </Select>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email" >Email</InputLabel>
                        <Input id="email" name="email" autoFocus 
                            onChange={handleEmailChange}
                            value ={email}/>
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password" >Password</InputLabel>
                        <Input id="password" name="password" type="password" onChange={handlePwdChange}/>
                    </FormControl>
                    <FormControlLabel control={<Checkbox color="primary"/>} label="Remember Me" />
                    <Button variant="contained" type="submit" fullWidth 
                    color="primary" className={classes.submit}>
                        Sign In
                    </Button>
                </form>
            </Paper>
        </main>
    );
}

export default withRouter(withStyles(styles)(Login));