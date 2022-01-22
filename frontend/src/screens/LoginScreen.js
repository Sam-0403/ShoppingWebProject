import styles from "../styles/LoginScreenStyles";
import {primary_variant} from "../styles/constants";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/styles";
import {Email, Lock} from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';

//Actions
import {get_users, set_user, reset_user} from "../redux/actions/user_actions";

//Hooks
import useInputState from "../hooks/useInputState";

const LoginScreen = ({classes, history}) => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.getUsers).users;
    const user = useSelector((state) => state.user);
    const {userInfo} = user;

    const [email, handleEmail, resetEmail] = useInputState("");
    const [password, handlePassword, resetPassword] = useInputState("");

    const [validEmail, setValidEmail] = useState("");
    const [validPassword, setValidPassword] = useState("");

    useEffect(() => {
            dispatch(get_users());
        }, [dispatch]
    );

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email_valid = users.find(user => user.email === email)?true:false;
        const user_valid = users.find(user => user.email === email && user.password === password)?true:false;
        if(user_valid){
            dispatch(reset_user());
            dispatch(set_user(email));
            setValidEmail("");
            setValidPassword("");
            resetEmail();
            resetPassword();
            history.push("/");
        }
        else{
            if(email === ""){
                setValidEmail("User cannot be empty!!!");
                setValidPassword("");
            }
            else if(!validateEmail(email)){
                setValidEmail("Invalid Email Format!!!");
                setValidPassword("");
            }
            else if(!email_valid){
                setValidEmail("Unknown User!!!");
                setValidPassword("");
            }
            else if(password === ""){
                setValidEmail("");
                setValidPassword("Password cannot be empty!!!");
            }
            else{
                setValidEmail("");
                setValidPassword("Incorrect Password!!!");
            }
        }
    }

    return (
        <div className={classes.screen}>
            <div className={classes.welcome}>
                <span>Welcome Back!!</span>
            </div>
            <div className={classes.loginContainer}>
                <div className={classes.loginWrapper}>
                    <span className={classes.loginHeader}>Login</span>
                    <form
                        className={classes.loginForm}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            className={classes.textInput}
                            label="Email"
                            autoComplete='off'
                            onChange={handleEmail}
                            name="email"
                            value={email}
                            variant="filled"
                            helperText={validEmail}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <Email style={{color: primary_variant}}/>
                                </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.textInput}
                            label="Password"
                            autoComplete='off'
                            onChange={handlePassword}
                            name="password"
                            variant="filled"
                            value={password}
                            helperText={validPassword}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <Lock style={{color: primary_variant}}/>
                                </InputAdornment>
                                ),
                            }}
                        />
                        <Button className={classes.loginButton} type="submit">Log In</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(LoginScreen);
