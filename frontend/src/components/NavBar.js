import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import {withStyles} from "@material-ui/styles";
import {ShoppingCart, Menu, Home} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import React from "react";

import {reset_user} from "../redux/actions/user_actions";

import styles from "../styles/NavBarStyles";

const NavBar = ({classes, click}) => {

    const history = useHistory()

    const loginClick = () => {
        history.push("/login");
    };

    const signupClick = () => {
        history.push("/signup");
    };

    const logOutClick = () => {
        dispatch(reset_user());
    }

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const {userInfo} = user;

    return (
        <div className={classes.navBar}>
            <div className={classes.logoList}>
                <Menu className={classes.menu} onClick={click}/>
                <div className={classes.logo}>
                    <h2>Sam's Shop</h2>
                </div>
            </div>
            <div className={classes.linkList}>
                <Link to="/cart" className={classes.link}>
                    <ShoppingCart style={{ fontSize: 20, color: "#ffffff" }}/>
                    <span>Your Cart</span>
                </Link>
                <Link to="/" className={classes.link}>
                    <Home style={{ fontSize: 20, color: "#ffffff" }}/>
                    <span>Home Page</span>
                </Link>
                <div className={classes.loginContainer}>
                    {userInfo.length===0?
                        <React.Fragment>
                            <Button
                                variant="outlined"
                                className={classes.button}
                                onClick={loginClick}
                            >
                                <span>Login</span>
                            </Button>
                            <Button
                                variant="outlined"
                                className={classes.button}
                                onClick={signupClick}
                            >
                                <span>Sign Up</span>
                            </Button>
                        </React.Fragment>:
                        <React.Fragment>
                            <span className={classes.userName}>{userInfo.name}</span>
                            <Button
                                variant="outlined"
                                className={classes.button}
                                onClick={logOutClick}
                            >
                                <span>Log Out</span>
                            </Button>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(NavBar);
