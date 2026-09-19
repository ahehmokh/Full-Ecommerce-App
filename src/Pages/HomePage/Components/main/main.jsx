import { useState } from "react";

const Main = () => {
    const MostPoPular = [
        {
          id: 1,
          category: "Work & Office",
          title: "Timeless Classic Collection",
          img: "https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 124.9,
        },
        {
          id: 2,
          category: "Casual",
          title: "Bohemian Rhapsody Attire",
          img: "https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 145.5,
        },
        {
          id: 3,
          category: "Evening Dresses",
          title: "Midnight Gala Maxi Dress",
          img: "https://images.pexels.com/photos/210892/pexels-photo-210892.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 175.0,
        },
        {
          id: 4,
          category: "Casual",
          title: "Power Suite Ensemble",
          img: "https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: 125.5,
        },
      ];
      const [data, setData] = useState(MostPoPular);
    return ( 
        
        <>
            <div className="main">
                <h1>Most Popular</h1>
            <div className="container">
          {data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="cardimg">
                  <img src={item.img} alt=""/>
                </div>
                <div className="cardbody">
                  <p >{item.category}</p>
                  <h5>{item.title}</h5>
                  <h4>{item.price}$</h4>
                </div>
                <div className="btns">
                  <button className="m-1">S</button>
                  <button className="m-1">M</button>
                  <button className="m-1">L</button>
                  <button className="m-1">XL</button>
                </div>
              </div>
            );
          })}
        </div>
            </div>
        </>
     );
}
 
export default Main;