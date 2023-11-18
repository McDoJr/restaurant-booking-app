import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquareYoutube} from "@fortawesome/free-brands-svg-icons";
import styles from "./header.module.css";

const Header = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.top}>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        <span>triosrestaurant@gmail.com</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSquareFacebook} className={styles.icon}/>
                        <FontAwesomeIcon icon={faSquareTwitter} className={styles.icon}/>
                        <FontAwesomeIcon icon={faSquareInstagram} className={styles.icon}/>
                        <FontAwesomeIcon icon={faSquareYoutube} className={styles.icon}/>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h1>~TRIO'S~</h1>
                    <div>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservation">Reservation</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/account">Account</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;