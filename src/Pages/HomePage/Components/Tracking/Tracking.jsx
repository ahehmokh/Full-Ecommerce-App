import {
  faArrowRotateLeft,
  faLocationDot,
  faLock,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Tracking = () => {
  return (
    <>
      <div className="section5 d-flex flex-wrap justify-content-evenly text-center items-center flex-wrap m-20">
        <div className="my-5">
          <FontAwesomeIcon icon={faLock} className="fs-1" />
          <h1>Secure Payments</h1>
          <p>
            Shop with confidence knowing <br /> that your transactions are
            <br /> safeguarded.
          </p>
        </div>
        <div className="my-5">
          <FontAwesomeIcon icon={faTruck} className="fs-1" />
          <h1>Free Shipping</h1>
          <p>
            Shopping with no extra charges – <br />
            savor the liberty of complimentary <br /> shipping on every order.
          </p>
        </div>
        <div className="my-5">
          <FontAwesomeIcon icon={faArrowRotateLeft} className="fs-1" />
          <h1>Easy Returns</h1>
          <p>
            With our hassle-free Easy Returns, <br /> changing your mind has
            never <br /> been more convenient.
          </p>
        </div>
        <div className="my-5">
          <FontAwesomeIcon icon={faLocationDot} className="fs-1" />
          <h1>Order Tracking</h1>
          <p>
            Stay in the loop with our Order <br /> Tracking feature – from
            checkout <br /> to your doorstep.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tracking;
