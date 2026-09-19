import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
             <footer className="d-flex justify-content-evenly bg-secondary ">
          <div className="d-flex flex-column my-4">
            <strong className="fs-4 my-3 text-black">
                Menu
            </strong>
            <Link to={"/"} className="text-light">Home</Link>
            <Link to={"/Shop"} className="text-light">Shop</Link>
          </div>
          <div className="d-flex flex-column my-4">
            <strong className="fs-4 my-3 text-black">
            Categories
            </strong>
            <Link className="text-light">Casual</Link>
            <Link className="text-light">Electronics</Link>
            <Link className="text-light">Jewels</Link>
            <Link className="text-light">Men Casual</Link>
          </div>
          <div className="d-flex flex-column my-4">
            <strong className="fs-4 my-3 text-black">
            Resources
            </strong>
            <Link className="text-light">Contact Support</Link>
            <Link className="text-light">FAQ</Link>
          </div>
          <div className="d-flex flex-column my-4">
            <strong className="fs-4 my-3 text-black">
            Social Media
            </strong>
            <Link className="text-light">Facebook</Link>
            <Link className="text-light">X</Link>
            <Link className="text-light">Instagram</Link>
          </div>
      </footer>
        </>
     );
}
 
export default Footer;