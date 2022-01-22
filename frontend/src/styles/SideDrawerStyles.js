import {primary, primary_variant} from "../styles/constants";

const styles = {
    sidedrawer: {
        width: "250px",
        height: "100vh",
        backgroundColor: "#ffffff",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "200",
        transition: "all 0.3s ease-out",
        display: "flex",
        flexDirection: "column",
        listStyle: "none",
    },
    sidedrawerLinks: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        listStyle: "none",
        height: "50px",
        width: "100%",
        backgroundColor: primary,
        borderBottom: `2px solid ${primary_variant}`,
        textDecoration: "none",
        "& span": {
            lineHeight: "50px",
            fontSize: "1.5rem",
            color: "#ffffff",
            marginLeft: "10px",
        },
        "&:hover": {
            backgroundColor: primary_variant
        }
    }
}

export default styles;