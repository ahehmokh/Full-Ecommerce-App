import { Link } from "react-router-dom";

const Section = () => {
    return ( 
        <>
        <div className="section d-flex flex-column justify-content-center align-items-center text-center">
        <div>
          <h2 className="text-center text-black">
            Explore our exquisite Bag <br /> Collection now!
          </h2>
          <Link to={"/Shop"}>
            <button>
              Shop Now
            </button>
          </Link>
        </div>
        </div>
        </>
     );
}
 
export default Section;