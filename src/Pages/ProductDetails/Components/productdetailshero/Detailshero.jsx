import { Link, useParams } from "react-router-dom";

const DetailsHero = () => {
   let {id} = useParams()

   
    return ( 
        <>
            <div className="herodetails d-flex justify-content-center align-items-center">
                <p><Link to={"/"}>Home</Link> &gt;&gt; <Link to={"/Shop"}>Shop</Link> &gt;&gt; Product {id}</p>
            </div>
        </>
     );
}
 
export default DetailsHero;