import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <section className="section2 d-flex justify-content-between flex-wrap">

      <div className="word d-flex justify-content-center flex-column align-items-center text-black text-center col-lg-6 col-12 p-5">
        
        <h5>Work & Office Attire</h5>

        <h1>
          Professional pinstripe <br />
          blazers collection
        </h1>

        <h4>
          Elevate your workwear with our Professional Pinstripe Blazers
          <br />
          Collection, where tailored sophistication meets modern
          <br />
          confidence for a powerfully polished office look.
        </h4>

        <Link to="/Shop">
          <button>
            Shop Now
          </button>
        </Link>

      </div>

      <div className="img col-lg-6 col-12"></div>

    </section>
  );
};

export default Section2;