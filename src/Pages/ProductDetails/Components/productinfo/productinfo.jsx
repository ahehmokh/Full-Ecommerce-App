import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../RTK/Store/Slices/CartSlice";
import { fetchSingleProduct } from "../../../../RTK/Store/Slices/singleProductSlice";
import CustomParams from "../../../../CustomParams";

const ProductInfo = () => {
    const [added, setAdded] = useState(false);
    const { id } = CustomParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.singleProduct);
    const cart = useSelector(state => state.Cart);
    
    console.log(product);
    
    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [id, dispatch]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setAdded(true);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="details justify-content-around flex-wrap mt-5 col">
            <div className="col-xl-6 col text-center">
                <img src={product.image} alt={product.title} className="img" />
            </div>
            <div className="data text-center col-lg-6 col">
                <div className="text-center">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    {/* <h5>This product has a rating of {product.rating.rate} out of 5 from {product.rating.count} customers.</h5> */}
                    <h3>Price: ${product.price}</h3>
                    <div>
                    {added && (
                    <span>Added {cart.find(item => item.id === product.id)?.quantity || 0} items</span>
                )}
                    </div>
                    <Link to="/Shop"><button>Back To Shop</button></Link>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                  
                </div>
              
            </div>
        </div>
    );
};

export default ProductInfo;
