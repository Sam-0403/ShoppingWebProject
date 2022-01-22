import { Link } from "react-router-dom";

import {withStyles} from "@material-ui/styles";
import {ShoppingCart, Home} from "@material-ui/icons";

import styles from "../styles/SideDrawerStyles";

const SideDrawer = ({show, click, classes}) => {
    return (
        <div className={classes.sidedrawer} onClick={click} style={{transform: show?"translateX(0)":"translateX(-100%)"}}>
            <Link to="/cart" className={classes.sidedrawerLinks}>
                <ShoppingCart style={{ fontSize: 20, color: "#ffffff", marginLeft: 20 }}/>
                <span>
                    Your Cart
                </span>
            </Link>
            <Link to="/" className={classes.sidedrawerLinks}>
                <Home style={{ fontSize: 20, color: "#ffffff", marginLeft: 20 }}/>
                <span>
                    Home Page
                </span>
            </Link>
        </div>
    )
}

export default withStyles(styles)(SideDrawer);
