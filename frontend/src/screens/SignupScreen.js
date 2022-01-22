import styles from "../styles/SignupScreenStyles";
import {primary_variant} from "../styles/constants";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/styles";
import {Email, Lock, AccountCircle} from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';

//Actions
import {get_users, set_user, reset_user, add_user} from "../redux/actions/user_actions";

//Hooks
import useInputState from "../hooks/useInputState";

const SignupScreen = ({classes, history}) => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.getUsers).users;

    const [name, handleName, resetName] = useInputState("");
    const [email, handleEmail, resetEmail] = useInputState("");
    const [password, handlePassword, resetPassword] = useInputState("");
    const [repeatPassword, handleRepeatPassword, resetRepeatPassword] = useInputState("");

    const [validName, setValidName] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [validPassword, setValidPassword] = useState("");
    const [validRepeatPassword, setValidRepeatPassword] = useState("");

    const userInfo = {
        name: name,
        email: email,
        password: password,
        isAdmin: false
    };

    useEffect(() => {
            dispatch(get_users());
        }, [dispatch]
    );

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email_repeat = users.find(user => user.email === email)?true:false;
        if(email === ""){
            setValidEmail("User cannot be empty!!!");
            setValidPassword("");
            setValidRepeatPassword("");
        }
        else if(email_repeat){
            setValidEmail("Account Exists!!!");
            setValidPassword("");
            setValidRepeatPassword("");
        }
        else if(!validateEmail(email)){
            setValidEmail("Invalid Email Format!!!");
            setValidPassword("");
            setValidRepeatPassword("");
        }
        else if(password === ""){
            setValidEmail("");
            setValidPassword("Password cannot be empty!!!");
            setValidRepeatPassword("");
        }
        else if(repeatPassword === ""){
            setValidEmail("");
            setValidPassword("");
            setValidRepeatPassword("Please repeat password again!!!");
        }
        else if(password !== repeatPassword){
            setValidEmail("");
            setValidPassword("");
            setValidRepeatPassword("Repeat Password incorrect!!!");
        }
        else{
            dispatch(reset_user());
            dispatch(add_user(userInfo));
            dispatch(set_user(email));
            setValidName("");
            setValidEmail("");
            setValidPassword("");
            setValidRepeatPassword("")
            resetName();
            resetEmail();
            resetPassword();
            resetRepeatPassword();
            history.push("/verification");
        }
    }

    return (
        <div className={classes.screen}>
            <div className={classes.welcome}>
                <span>Hello Friend!!</span>
            </div>
            <div className={classes.signupContainer}>
                <div className={classes.signupWrapper}>
                    <span className={classes.signupHeader}>Sign Up</span>
                    <form
                        className={classes.signupForm}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            className={classes.textInput}
                            label="Name"
                            autoComplete='off'
                            onChange={handleName}
                            name="name"
                            value={name}
                            variant="filled"
                            helperText={validName}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle style={{color: primary_variant}}/>
                                </InputAdornment>
                                ),
                            }}
                        />
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
                        <TextField
                            className={classes.textInput}
                            label="Repeat Password"
                            autoComplete='off'
                            onChange={handleRepeatPassword}
                            name="repeat password"
                            variant="filled"
                            value={repeatPassword}
                            helperText={validRepeatPassword}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <Lock style={{color: primary_variant}}/>
                                </InputAdornment>
                                ),
                            }}
                        />
                        <Button className={classes.signupButton} type="submit">Sign Up</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(SignupScreen);
