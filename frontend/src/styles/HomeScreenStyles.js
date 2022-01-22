import {primary_variant} from "./constants";
import sizes from "./size";

const styles = {
    homescreen: {
        maxWidth: "1240px",
        margin: "0 auto",
        marginTop: "1rem",
        "& svg": {
            "&:hover": {
                color: `${primary_variant} !important`
            },
        },
        [sizes.down("lg")]: {
            width: "930px",
        },
        [sizes.down("md")]: {
            width: "620px",
        },
        [sizes.down("sm")]: {
            width: "574px",
        },
        [sizes.down("xs")]: {
            width: "310px",
        },
    },
    homescreenTitle: {
        fontSize: "1.5rem",
        color: "#171717",
        marginBottom: "1rem",
        marginLeft: "8px",
        [sizes.down("xs")]: {
            display: "block",
            textAlign: "center",
        },
    },
    homescreenProducts: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        [sizes.down("lg")]: {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 1fr)",
        },
    },
    addButton: {
        position: "fixed",
        zIndex: "20",
        bottom: "1rem",
        right: "2rem",
    }
};

export default styles;