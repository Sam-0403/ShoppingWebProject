import {primary} from "../styles/constants";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { withStyles } from "@material-ui/styles";
import {AddCircle} from "@material-ui/icons";

//Actions
import { get_products } from "../redux/actions/product_actions";

//Components
import Product from "../components/Product";
import UnknownAlert from "../components/UnknownAlert";

import styles from "../styles/HomeScreenStyles";

const HomeScreen = ({classes}) => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    const user = useSelector((state) => state.user);
    const {userInfo} = user;
    
    useEffect(() => {
        dispatch(get_products());
      }, [dispatch]
    );

    return (
        <>
        <UnknownAlert />
        <div className={classes.homescreen}>
            <h2 className={classes.homescreenTitle}>Latest Products</h2>
            <div className={classes.homescreenProducts}>
                {loading ? (
                <h2>Loading...</h2>
                ) : error ? (
                <h2>{error}</h2>
                ) : (
                products.map((product) =>
                    <Product
                        key={product._id}
                        productId={product._id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />)
                )}
            </div>
            <AddCircle style={{color: primary, fontSize: 50}} className={classes.addButton}/>
        </div>
        </>
    )
}

export default withStyles(styles)(HomeScreen);
