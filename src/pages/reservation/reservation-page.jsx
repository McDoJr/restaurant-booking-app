import Header from "../../components/header.jsx";
import HomeSection from "../../components/home-section.jsx";
import background from "../../images/reservation_bg.jpg";
import {useEffect} from "react";
import {setPageTitle} from "../../utils/utils.js";

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
        </>
    )
}

export default ReservationPage;