import Header from "../../components/header.jsx";
import HomeSection from "../../components/home-section.jsx";
import background from "../../images/menu_bg.jpg";
import FoodSection from "../../components/food-section.jsx";
import MenuSection from "./menu-section.jsx";
import {useEffect, useRef} from "react";
import {scrollTo, scrollToTop, setPageTitle} from "../../utils/utils.js";
import Footer from "../../components/footer.jsx";
import ReserveSection from "../../components/reserve-section.jsx";
import ScrollTop from "../../components/scroll-top.jsx";

const MenuPage = ({ loggedIn, setLoggedIn }) => {

    const food = useRef(null);

    useEffect(() => {
        setPageTitle("Menu");
        scrollToTop();
    }, []);

    const heading = (
        <>
            <h1>Our Menus</h1>
            <h2>THE PREMIUM FOOD AND DRINK EXPERIENCE</h2>
            <button onClick={() => scrollTo(food)}>VIEW DETAILS</button>
        </>
    )

    return (
        <>
            <Header currentPage="menu" loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <HomeSection heading={heading} background={background}/>
            <FoodSection ref={food}/>
            <MenuSection />
            <ReserveSection />
            <Footer currentPage="menu"/>
            <ScrollTop/>
        </>
    )
}

export default MenuPage;