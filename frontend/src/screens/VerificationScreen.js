import { withStyles } from "@material-ui/styles";

import styles from "../styles/VerificationScreenStyles";

const VerificationScreen = ({classes}) => {
    return (
        <div className={classes.screen}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h1>Verification Site</h1>
                </div>
                <div className={classes.context}>
                    <span>Check your email to verify your account!</span>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(VerificationScreen);
