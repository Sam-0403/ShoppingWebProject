import {primary, primary_variant} from "../styles/constants";

const styles = {
    product: {
        width: "280px",
        padding: "1rem",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
        margin: "8px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    productImage: {
        height: "170px",
        borderRadius: "8px",
        marginBottom: "8px",
    },
    productInfo: {
        "& p": {
            marginBottom: "8px",
        }
    },
    infoName: {
        fontSize: "1rem",
        fontWeight: "bold",
        overflow: "scroll",
    },
    infoDescription: {
        fontSize: "0.8rem",
        height: "4.8rem",
        overflow: "scroll",
    },
    infoPrice: {
        fontWeight: "bold",
    },
    infoButton: {
        display: "block",
        width: "100%",
        textDecoration: "none",
        textAlign: "center",
        color: "#171717",
        backgroundColor: "#f4f4f4",
        padding: "8px 4px",
        fontSize: "1rem",
        "&:hover": {
            backgroundColor: primary,
            color: "#ffffff",
        },
        "&:active": {
            backgroundColor: primary_variant,
            color: "#ffffff",
        },
    }
};

export default styles;