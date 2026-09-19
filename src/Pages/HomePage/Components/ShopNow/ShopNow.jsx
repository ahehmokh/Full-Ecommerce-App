import { Link } from "react-router-dom";

const ShopNow = () => {
    return ( 
        <>
        <div className="shopnow d-flex justify-content-end align-items-center">
        <div className="address text-center">
          <h1>
            Discover the allure <br /> fashion reinvented!
          </h1>
          <p>
            Dive into a world of style with our latest collection! Shop now
            <br /> and redefine your wardrobe narrative!
          </p>
          <Link to={'/Shop'}>
            <button className=" border-black">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
        </>
     );
}
 
export default ShopNow;