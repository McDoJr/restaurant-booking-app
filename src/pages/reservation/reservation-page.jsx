import Header from "../../components/header.jsx";
import HomeSection from "../../components/home-section.jsx";
import background from "../../images/reservation_bg.jpg";
import {useEffect} from "react";
import {setPageTitle} from "../../utils/utils.js";
import BookSection from "./book-section.jsx";
import Calendar from "../../components/calendar.jsx";

const ReservationPage = () => {

    useEffect(() => {
        setPageTitle("Reservation");
    }, []);

    const heading = (
        <>
            <h1>Make Reservation</h1>
            <h2>BOOK A TABLE ONLINE</h2>
            <button>VIEW DETAILS</button>
        </>
    );

    return (
        <>
            <Header />
            <HomeSection heading={heading} background={background}/>
            <BookSection />
            {/*<Calendar/>*/}
        </>
    )
}

export default ReservationPage;