import { withStyles } from "@material-ui/styles";
import {Link} from "react-router-dom";

import styles from "../styles/ProductStyles";

const Product = ({imageUrl, name, price, description, productId, classes}) => {
    return (
        <div className={classes.product}>
            <img
                className={classes.productImage}
                src={imageUrl}
                alt={name}
            />
            <div className={classes.productInfo}>
                <p className={classes.infoName}>{name}</p>
                <p className={classes.infoDescription}>
                    {description}
                </p>
                <p className={classes.infoPrice}>${price}</p>
                <Link to={`/product/${productId}`} className={classes.infoButton}>
                    View
                </Link>
            </div>
            
        </div>
    )
}

export default withStyles(styles)(Product);
