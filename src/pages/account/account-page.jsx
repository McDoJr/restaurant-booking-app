import Header from "../../components/header.jsx";
import HomeSection from "../../components/home-section.jsx";
import background from "../../images/home_bg.png";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.js";
import Footer from "../../components/footer.jsx";
import ScrollTop from "../../components/scroll-top.jsx";

const AccountPage = () => {

    useEffect(() => {
        setPageTitle("Account");
        scrollToTop();
    }, []);

    const heading = (
        <>
            <h1>Your Account</h1>
            <h2>CHECK YOUR ACCOUNT HERE</h2>
            <button>VIEW DETAILS</button>
        </>
    );

    return (
        <>
            <Header />
            <HomeSection heading={heading} background={background}/>
            <Footer />
            <ScrollTop />
        </>
    )
}

export default AccountPage;