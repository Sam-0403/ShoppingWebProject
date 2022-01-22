import LoginBackground from "../sources/LoginBackground.svg";
import sizes from "./size";
import {primary, primary_variant} from "./constants";

const styles = {
    screen: {
        height: "80vh",
        minHeight: "600px",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        margin: "0 auto",
        marginTop: "max(10vh, 70px)",
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxWidth: "800px",
        [sizes.down("sm")]: {
            flexDirection: "column",
            width: "60%",
        },
        [sizes.down("xs")]: {
            flexDirection: "column",
            width: "75%",
        }
    },
    welcome: {
        width: "40%",
        height: "100%",
        backgroundColor: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        "& span": {
            width: "80%",
            maxWidth: "250px",
            color: "#ffffff",
            fontSize: "3rem",
            textAlign: "center",
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "30%"
        }
    },
    signupContainer: {
        width: "60%",
        height: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        [sizes.down("sm")]: {
            width: "100%",
            height: "70%"
        }
    },
    signupWrapper: {
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    signupForm: {
        width: "80%",
        padding: "20px 0",
        height: "340px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#f4f4f4",
        borderRadius: "4px",
    },
    signupHeader: {
        fontSize: "2rem",
        color: primary
    },
    textInput: {
        width: "80%",
        '& label.Mui-focused': {
            color: primary_variant,
        },
        "&>div": {
            "&::before": {
                borderBottom: `1px solid ${primary_variant}`,
            },
            "&::after": {
                borderBottom: `2px solid ${primary}`,
            },
        }
    },
    signupButton: {
        width: "100px",
        height: "40px",
        backgroundColor: primary,
        color: "#ffffff",
        "&:hover": {
            backgroundColor: primary_variant,
        },
    }
};

export default styles;