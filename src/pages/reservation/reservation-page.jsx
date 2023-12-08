import Header from "../../components/header.jsx";
import HomeSection from "../../components/home-section.jsx";
import background from "../../images/reservation_bg.jpg";
import {useEffect, useRef} from "react";
import {scrollTo, scrollToTop, setPageTitle} from "../../utils/utils.js";
import BookSection from "./book-section.jsx";
import ScrollTop from "../../components/scroll-top.jsx";
import ProcessSection from "../../components/process-section.jsx";
import Footer from "../../components/footer.jsx";
import ContactSection from "../../components/contact-section.jsx";

const ReservationPage = () => {

    const book = useRef(null);

    useEffect(() => {
        setPageTitle("Reservation");
        scrollToTop();
    }, []);

    const heading = (
        <>
            <h1>Make Reservation</h1>
            <h2>BOOK A TABLE ONLINE</h2>
            <button onClick={() => scrollTo(book)}>VIEW DETAILS</button>
        </>
    );

    return (
        <>
            <Header currentPage="reservation"/>
            <HomeSection heading={heading} background={background}/>
            <BookSection ref={book}/>
            <ContactSection />
            <ProcessSection />
            <Footer currentPage="reservation"/>
            <ScrollTop />
        </>
    )
}

export default ReservationPage;