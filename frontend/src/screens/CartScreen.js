// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { withStyles } from "@material-ui/styles";
import sizes from "../styles/size";

//Actions
import {add_to_cart, remove_from_cart} from "../redux/actions/cart_actions";

//Components
import UnknownAlert from "../components/UnknownAlert";

const styles = {
    screen: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "1240px",
        margin: "2rem auto",
        "& h2": {
            marginLeft: "1rem",
        },
    },
    screenContainer: {
        flex: "1",
        display: "flex",
        [sizes.down("md")]: {
            flexDirection: "column",
        },
    },
    screenLeft: {
        flex: "0.7",
        marginRight: "1rem",
        backgroundColor: "transparent",
        padding: "1rem",
        [sizes.down("md")]: {
            flex: "1",
            margin: "0 auto",
            marginBottom: "0",
        },
    },
    screenRight: {
        flex: "0.3",
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.4)",
        height: "fit-content",
        marginRight: "1rem",
        marginTop: "1rem",
        "& div": {
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            padding: "1rem",
            "&:last-child": {
                border: "none",
            },
            "& button": {
                padding: "10px 16px",
                width: "100%",
                backgroundColor: "#171717",
                color: "#f4f4f4",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease-out",
                "&:hover": {
                    transform: "scaleX(1.03) scaleY(1.1)",
                },
            },
        },
        [sizes.down("md")]: {
            flex: "1",
            marginLeft: "1rem",
            marginTop: "0",
        },
    },
    screenInfo: {
        "& p": {
            padding: "8px",
        },
    },
};

const CartScreen = ({classes}) => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const quantityChangeHandler = (id, quantity) => {
        dispatch(add_to_cart(id, quantity));
    };
    
    const removeHandler = (id) => {
        dispatch(remove_from_cart(id));
    };
    
    const getCartCount = () => {
        return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0);
    }
    
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price*item.quantity) + price, 0)
    }

    return (
        <>
        <UnknownAlert />
        <div className={classes.Screen}>
            <h2>Shopping Cart</h2>
            <div className={classes.screenContainer}>
                {/* <div className={classes.screenLeft}>
                {cartItems.length === 0 ? (
                    <div>
                    Your cart is empty!
                    <Link to="/">Go Back</Link>
                    </div>
                ) : (
                    cartItems.map((item) => <CartItem item={item} quantityChangeHandler={quantityChangeHandler} removeHandler={removeHandler} key={item.product}/>)
                )}
                </div> */}
                <div className={classes.screenRight}>
                <div className={classes.screenInfo}>
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div className={classes.screenButton}>
                    <button>Proceed To Checkout</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default withStyles(styles)(CartScreen);
