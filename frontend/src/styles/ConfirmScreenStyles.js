import LoginBackground from "../sources/LoginBackground.svg";
import sizes from "./size";
import {primary, primary_variant} from "./constants";

const styles = {
    screen: {
        height: "300px",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        marginTop: "max(10vh, 70px)",
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxWidth: "400px",
        alignItems: "center",
        justifyContent: "center",
        [sizes.down("sm")]: {
            width: "70%",
        },
        [sizes.down("xs")]: {
            width: "75%",
        }
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff70",
    },
    header: {
        width: "100%",
        height: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: primary,
        "& h1": {
            fontSize: "1.6rem",
            color: "#ffffff"
        }
    },
    context: {
        position: "relative",
        width: "100%",
        height: "75%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "top",
        "&>span": {
            width: "75%",
            marginTop: "1rem",
            fontSize: "1.2rem",
            color: "000000",
            textAlign: "center"
        }
    },
    button: {
        position: "absolute",
        width: "80px",
        height: "50px",
        bottom: "1.5rem",
        fontSize: "1.2rem",
        fontWeight: "medium",
        color: "#ffffff",
        backgroundColor: primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            backgroundColor: primary_variant
        }
    }
};

export default styles;