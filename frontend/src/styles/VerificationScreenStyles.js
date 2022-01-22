import LoginBackground from "../sources/LoginBackground.svg";
import sizes from "../styles/size";
import {primary} from "../styles/constants";

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
            fontSize: "2rem",
            color: "#ffffff"
        }
    },
    context: {
        width: "100%",
        height: "75%",
        display: "flex",
        justifyContent: "center",
        "& span": {
            width: "60%",
            marginTop: "1rem",
            fontSize: "1.2rem",
            color: "000000",
        }
    }
};

export default styles;