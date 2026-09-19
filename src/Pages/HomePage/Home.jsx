
//Components
import Footer from "./Components/footer/Footer";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/main/main";
import Section from "./Components/section/section";
import Section2 from "./Components/section2/section2";
import ShopNow from "./Components/ShopNow/ShopNow";
import Tracking from "./Components/Tracking/Tracking";

const Home = () => {
    return ( 
        <>
            <Hero/>
            <Main/>
            <Section/>
            <Section2/>
            <ShopNow/>
            <Tracking/>
            <Footer/>
        </>
     );
}
 
export default Home;