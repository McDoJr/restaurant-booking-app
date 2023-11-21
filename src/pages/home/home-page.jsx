import Header from "../../components/header.jsx";
import AboutSection from "./about-section.jsx";
import styles from "./home-page.module.css";
import HomeSection from "../../components/home-section.jsx";
import background from "../../images/home_bg.png";
import FoodSection from "../../components/food-section.jsx";
import ReserveSection from "../../components/reserve-section.jsx";
import ProcessSection from "../../components/process-section.jsx";
import {scrollToTop, setPageTitle} from "../../utils/utils.js";
import {useEffect} from "react";
import Footer from "../../components/footer.jsx";
import ScrollTop from "../../components/scroll-top.jsx";
import {useNavigate} from "react-router-dom";
const HomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setPageTitle("Home");
        scrollToTop();
        // alert(`${window.screen.width}px / ${window.screen.height}`);
    }, []);

    const heading = (
        <>
            <h1>Enjoy Tasty & Fresh Food</h1>
            <h2>FRESH AND PREMIUM QUALITY</h2>
            <button onClick={() => navigate("/reservation")}>BOOK NOW</button>
        </>
    )

    return (
        <>
            <Header />
            <HomeSection heading={heading} background={background}/>
            <h1 className={styles.title}>Trio's Restaurant</h1>
            <AboutSection />
            <FoodSection />
            <ReserveSection />
            <ProcessSection />
            <Footer />
            <ScrollTop />
        </>
    )
}

export default HomePage;