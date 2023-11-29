import styles from "./footer.module.css";
import {faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquareYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";
import {useNavigate} from "react-router-dom";
import {scrollToTop} from "../utils/utils.js";

const Footer = ({currentPage}) => {

    const navigate = useNavigate();

    const handleClick = (pageName, path) => {
        if (pageName === currentPage) {
            scrollToTop();
        }else {
           navigate(path);
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.left}>
                    <h1>~TRIO'S~</h1>
                    <div>
                        <FontAwesomeIcon icon={faSquareFacebook} className={styles.icon}/>
                        <FontAwesomeIcon icon={faSquareTwitter} className={styles.icon}/>
                        <FontAwesomeIcon icon={faSquareInstagram} className={styles.icon}/>
                        <FontAwesomeIcon icon={faSquareYoutube} className={styles.icon}/>
                    </div>
                </div>
                <div className={styles.middle}>
                    <h2>Menu</h2>
                    <span onClick={() => handleClick("home", "/home")}>Home</span>
                    <span onClick={() => handleClick("menu", "/menu")}>Menu</span>
                    <span onClick={() => handleClick("reservation", "/reservation")}>Reservation</span>
                    <span onClick={() => handleClick("contact", "/contact")}>Contact</span>
                    <span onClick={() => handleClick("account", "/account")}>Account</span>
                </div>
                <div className={styles.right}>
                    <h2>Find Us</h2>
                    <span><FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>Narra Road, Butuan City</span>
                    <span><FontAwesomeIcon icon={faPhone} className={styles.icon}/>+62 86800964</span>
                    <span><FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>triosrestaurant@gmail.com</span>
                </div>
            </div>
            <span className={styles.copyright}><FontAwesomeIcon icon={faCopyright} className={styles.icon}/>Copyright Trio’s 2022, All right reserved.</span>
        </section>
    )
}

export default Footer;