import styles from "./reserve-section.module.css";
import {useNavigate} from "react-router-dom";


const ReserveSection = () => {

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <h1>Make You Reservation Now</h1>
                <button onClick={() => navigate("/reservation")}>BOOK NOW</button>
            </div>
        </section>
    )
}

export default ReserveSection;