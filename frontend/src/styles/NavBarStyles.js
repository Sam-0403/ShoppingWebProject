import sizes from "./size";
import {primary, primary_variant} from "./constants";

const styles = {
    navBar: {
        width: "100%",
        height: "50px",
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: primary
    },
    logoList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    linkList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        marginLeft: "20px",
        "& h2": {
            fontSize: "1.5rem",
            color: "#ffffff",
            [sizes.down("xxs")]: {
                fontSize: "1.2rem",
            },
        }
    },
    menu: {
        color: "#ffffff",
        width: "1.5rem",
        marginLeft: "10px",
        [sizes.up("sm")]: {
            display: "none"
        },
    },
    link: {
        width: "150px",
        height: "50px",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& span": {
            color: "#ffffff",
            fontSize: "1.2rem",
            marginLeft: "5px"
        },
        "&:hover": {
            backgroundColor: primary_variant,
        },
        [sizes.down("sm")]: {
            display: "none"
        },
    },
    loginContainer: {
        width: "250px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        [sizes.down("xxs")]: {
            width: "180px",
        },
    },
    button: {
        width: "80px",
        height: "32px",
        boxSizing: "content-box",
        border: `2px solid #ffffff`,
        padding: "0",
        [sizes.down("xxs")]: {
            width: "60px",
            height: "30px",
        },
        "& span": {
            width: "100%",
            hieght: "100%",
            fontSize: "1rem",
            color: "#ffffff",
            [sizes.down("xxs")]: {
                fontSize: "0.8rem",
            },
        },
    },
    userName: {
        color: "#ffffff",
        fontSize: "1.2rem",
    }
};
export default styles;