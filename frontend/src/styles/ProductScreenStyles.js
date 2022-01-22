import sizes from "./size";
import {primary, primary_variant} from "./constants";

const styles = {
    screen: {
        maxWidth: "1240px",
        margin: "0 auto",
        marginTop: "2rem",
        padding: "1.5rem",
        display: "flex",
        [sizes.down("md")]: {
          flexDirection: "column",
        }
    },
    screenLeft: {
      display: "flex",
      flex: "0.8",
      [sizes.down("md")]: {
        flexDirection: "column",
        flex: "1",
      },
      [sizes.up("md")]: {
        alignItems: "center"
      }
    },
    leftImage: {
      margin: "0.5rem",
      flex: "0.6",
      height: "350px",
      "& img": {
        height: "100%",
        overflow: "hidden",
      },
      [sizes.down("md")]: {
        flex: "1",
      }
    },
    leftInfo: {
      margin: "0.5rem",
      height: "350px",
      maxHeight: "350px",
      flex: "0.4",
      backgroundColor: "#ffffff",
      height: "fit-content",
      fontSize: "1rem",
      paddingBottom: "1rem",
      "&>p": {
        padding: "1rem",
        borderBottom: `1px solid #00000050`,
      },
      "&>p:last-child": {
        borderBottom: "none",
      },
      [sizes.down("md")]: {
        flex: "1",
      }
    },
    leftName: {
        fontSize: "1.3rem",
        fontWeight: "bold",
    },
    leftDescription: {
      maxHeight: "210px",
      overflow: "scroll",
    },
    screenRight: {
        flex: "0.2",
        [sizes.down("md")]: {
          flex: "1",
          padding: "0.5rem",
        }
    },
    rightInfo: {
        width: "250px",
        margin: "0.5rem",
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.4)",
        "&>p": {
          padding: "1rem",
          borderBottom: `1px solid #00000050`,
        },
        "&>p:last-child": {
          borderBottom: "none",
        },
        "& p": {
          padding: "1rem",
          fontSize: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
          "& button": {
            gridColumn: "1/-1",
            fontSize: "1.2rem",
            padding: "10px 16px",
            backgroundColor: primary,
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: primary_variant,
            }
          }
        },
        [sizes.down("md")]: {
          width: "100%",
          margin: "0",
        }
    },
    rightQuantity: {
      display: "grid",
      padding: "1rem",
      "& div": {
        display: "flex",
        justifyContent: "flex-start",
        "&>span": {
          width: "50px",
        },
        "& button": {
          margin: "0"
        }
      },
      "& button": {
        width: "20px",
        height: "20px",
        margin: "0 auto",
        backgroundColor: primary,
        boxSizing: "content-box",
        padding: "0",
        border: "none",
        lineHeight: "center",
        textAlign: "center",
        color: "#ffffff",
        borderRadius: "2px",
        "&:hover": {
          backgroundColor: primary_variant
        },
      },
    },
    quantity: {
      textAlign: "center"
    }
};

export default styles;