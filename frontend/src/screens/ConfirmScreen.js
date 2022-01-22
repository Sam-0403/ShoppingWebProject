import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

//Actions
import {set_user, confirm_user} from "../redux/actions/user_actions";

import styles from "../styles/ConfirmScreenStyles";

const ConfirmScreen = ({match, classes}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const {userInfo} = user;

    useEffect(() => {
        console.log(match.params.confirmationCode);
        dispatch(confirm_user(match.params.confirmationCode));
    }, [dispatch]);
    const history = useHistory();
    const backClick = () => {
        history.push("/");
        dispatch(set_user(userInfo.email));
    }
    return (
        <div className={classes.screen}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1>Your Account is Confirmed!!</h1>
                </div>
                <div className={classes.context}>
                    <span>Thank you for signing up our website!!</span>
                    <span>If there's any problem, please contact us!!</span>
                    <Button className={classes.button} onClick={backClick}>Back</Button>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(ConfirmScreen);
