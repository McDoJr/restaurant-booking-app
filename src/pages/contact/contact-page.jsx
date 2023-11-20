import Header from "../../components/header.jsx";
import HomeSection from "../../components/home-section.jsx";
import background from "../../images/contact_bg.jpg";
import {useEffect} from "react";
import {scrollToTop, setPageTitle} from "../../utils/utils.js";
import Footer from "../../components/footer.jsx";
import ScrollTop from "../../components/scroll-top.jsx";
import ContactSection from "../../components/contact-section.jsx";
import InquireSection from "./inquire-section.jsx";

const ContactPage = () => {

    useEffect(() => {
        setPageTitle("Contact");
        scrollToTop();
    }, []);

    const heading = (
        <>
            <h1>Contact Us</h1>
            <h2>GET IN TOUCH WITH US</h2>
            <button>VIEW DETAILS</button>
        </>
    );

    return (
        <>
            <Header />
            <HomeSection heading={heading} background={background}/>
            <ContactSection />
            <InquireSection />
            <Footer />
            <ScrollTop />
        </>
    )
}

export default ContactPage;