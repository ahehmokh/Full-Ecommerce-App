import { useSelector , useDispatch } from "react-redux";
import { clear, deleteFromCart } from "../../../../RTK/Store/Slices/CartSlice";
const CartTable = () => {
    const product =  useSelector(state => state.Cart)
    const dispatch = useDispatch()
    const totalPrice = product.reduce((acc , product) => {
        acc+= product.price * product.quantity
        return acc
    },0)
    return ( 
        <>
  <div style={{height:"100vh"}} className="d-flex align-content-center justify-content-around flex-column">
  <div className="maindiv d-flex flex-column">
       <div className="d-flex justify-content-center tablehead">
        <h3>Your Cart Contains {product.length} Product</h3>
        </div>
        <div className="clear text-center">
        <button  onClick={() => dispatch(clear())}>Clear</button>
        </div>

        <table className="text-center m-auto"> 
            <thead className="">
                <tr>
                <th>name</th>
                <th>image</th>
                <th>quantity</th>
                <th>price</th>
                <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {product.map((item) => (
                    <tr key={item.id}>
                    <td>{item.title}</td>
                    <td><img src={item.image} alt=""  /></td>
                    <td>{item.quantity}</td>
                    <td>{item.price}$</td>
                    <td><button onClick={() => {
                        dispatch(deleteFromCart(item))
                    }}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="d-flex justify-content-evenly mt-5 ">
        <h4 className="text-center mt-3">Total Price is: {totalPrice.toFixed(2)} $</h4>
              {product.length > 0?  <button onClick={() => {
                    alert("Purchase Complete")
                    dispatch(clear())
                }}>Buy All</button>:<p>No Products to buy</p>}
        </div>
       </div>
  </div>
        </>
     );
}
 
export default CartTable;
<>
</>