import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { FetchProducts } from "../../../../RTK/Store/Slices/ProductSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Products = () => {
   
    const productscard = useSelector(state => state.ShowProducts)
  

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchProducts())
    },[dispatch])

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        filterProducts(category);
    }, [category , products]);

        useEffect(() =>{
            if(productscard){
                setProducts(productscard)
            }
        },[productscard])



    const filterProducts = (category) => {
        if (category === "all") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((item) => item.category === category);
            setFilteredProducts(filtered);
        }
        
    };
    
    return ( 
    <>
    <div className="products text-center my-5">
        <h1>Our Products</h1>
        <div className="d-flex">
                    <p>Filter by</p>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="men's clothing">men</option>
                        <option value="jewelery">jewelery</option>
                        <option value="electronics">electronics</option>
                        <option value="women's clothing">women</option>
                    </select>
                </div>
     <div className="cards d-flex flex-wrap justify-content-evenly overflow-hidden">
     {filteredProducts &&
                        filteredProducts.map(product => (
                            <motion.div initial={{opacity:0,scale:0 }} animate={{opacity:1,scale:1}} transition={{duration:0.2}} key={product.id} style={{ width: '350px' }} className="card">
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title className="title">{product.title}</Card.Title>
                                    <Card.Text>
                                        {`${product.price} $`}
                                    </Card.Text>
                                    <Link to={`/Product/${product.id}`}><Button variant="primary">View</Button></Link>
                                </Card.Body>
                            </motion.div>
                        ))
                  }
     </div>
     <div className="mt-5">
     <Link to={"/Cart"}><button>Go to your Cart</button></Link>
     </div>
    </div>
        
    </> );
}
 
export default Products;