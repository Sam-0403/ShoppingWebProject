import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { withStyles } from "@material-ui/styles";

//Actions
import { get_product_details } from "../redux/actions/product_actions";
import { get_cart, add_to_cart, add_to_customer } from "../redux/actions/cart_actions";
import {set_user} from "../redux/actions/user_actions";

//Components
import UnknownAlert from "../components/UnknownAlert";

import {primary} from "../styles/constants";
import styles from "../styles/ProductScreenStyles";

const ProductScreen = ({match, history, classes}) => {
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    const user = useSelector((state) => state.user);
    const {userInfo} = user;

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (product && match.params.id !== product._id) {
          dispatch(get_product_details(match.params.id));
        }
        dispatch(get_cart())
      }, [dispatch, match, product]
    );

    const addButton = () => {
      if(quantity < product.countInStock){
        setQuantity(quantity+1);
      }
    }
    const minusButton = () => {
      if(quantity > 1){
        setQuantity(quantity-1);
      }
    }

    const addToCartClick = async (event) => {
      // event.preventDefault();
      dispatch(add_to_cart(product._id, quantity));
      dispatch(add_to_customer(product._id, quantity));
      setTimeout(async () => {
        await dispatch(set_user(userInfo.email));
        await dispatch(get_product_details(match.params.id));
      }, 1000);
      history.push("/cart");
    }

    return (
      <>
      <UnknownAlert />
      <div className={classes.screen}>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className={classes.screenLeft}>
              <div className={classes.leftImage}>
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className={classes.leftInfo}>
                <p className={classes.leftName}>{product.name}</p>
                <p className={classes.leftPrice}>Price: ${product.price}</p>
                <p className={classes.leftDescription} style={{whiteSpace: "pre-wrap"}}>
                  Description:
                  {`\n\n${product.description}`}
                </p>
              </div>
            </div>
            <div className={classes.screenRight}>
              <div className={classes.rightInfo}>
                <p className={classes.rightPrice}>
                  Price: <span>${product.price}</span>
                </p>
                <p className={classes.rightStatus}>
                  Status: <span>{product.countInStock>0 ? "In Stock" : "Out of Stock"}</span>
                </p>
                <div className={classes.rightQuantity} style={{gridTemplateColumns: (product.countInStock>0)?"1fr 1fr":"1fr"}}>
                  {product.countInStock>0 ? 
                    <>
                    <span>Quantity: </span>
                    <div>
                      <button onClick={minusButton} style={{backgroundColor: (quantity===1)?`${primary}70`:""}}>-</button>
                      <span className={classes.quantity}>{quantity}</span>
                      <button onClick={addButton} style={{backgroundColor: (quantity===product.countInStock)?`${primary}70`:""}}>+</button>
                    </div>
                    </>:
                    <span>Please Wait!</span>
                  }
                  
                </div>
                <p className={classes.rightButton}>
                  <button type="button" onClick={addToCartClick}>Add To Cart</button>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      </>
    )
}

export default withStyles(styles)(ProductScreen);
