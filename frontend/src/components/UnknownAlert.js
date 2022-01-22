import SnackbarContent from '@material-ui/core/SnackbarContent';
import {withStyles} from "@material-ui/styles";

import { useDispatch, useSelector } from "react-redux";

//Actions
import {confirm_pending_user} from "../redux/actions/user_actions";

const styles = {
    snackbar: {
        position: "fixed",
        width: "40%",
        left: "30%",
        bottom: "1.5rem",
    }
};

const UnknownAlert = ({classes}) => {
    const user = useSelector((state) => state.user);
    const {userInfo} = user;
    const dispatch = useDispatch();
    const snackbarClick = () => {
        const info = {
            name: userInfo.name,
            email: userInfo.email,
            confirmationCode: userInfo.confirmationCode
        }
        dispatch(confirm_pending_user(info));
    }

    return (  
        (userInfo.length===0||userInfo.status!=="Active")&&
        <SnackbarContent
            message={userInfo.length===0?"Please sign up or login.":"Please confirm your account by clicking here."}
            className={classes.snackbar}
            onClick={userInfo.length===0?null:snackbarClick}
            style={{cursor: userInfo.length===0?"":"pointer"}}
        />
    )
}

export default withStyles(styles)(UnknownAlert)
