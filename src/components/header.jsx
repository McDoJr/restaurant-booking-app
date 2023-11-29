import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquareYoutube} from "@fortawesome/free-brands-svg-icons";
import styles from "./header.module.css";
import {Link, useNavigate} from "react-router-dom";

const Header = ({ currentPage, loggedIn, setLoggedIn }) => {

    const navigate = useNavigate();

    const getClassName = (pageName) => {
        return pageName === currentPage ? styles.active : '';
    }

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
                    <h1 onClick={() => navigate("/")}>~TRIO'S~</h1>
                    <div>
                        <ul>
                            <li className={getClassName("home")}><Link to="/home">Home</Link></li>
                            <li className={getClassName("menu")}><Link to="/menu">Menu</Link></li>
                            <li className={getClassName("reservation")}><Link to="/reservation">Reservation</Link></li>
                            <li className={getClassName("contact")}><Link to="/contact">Contact</Link></li>
                            {loggedIn ? <li className={getClassName("account")}><a onClick={() => setLoggedIn(false)}>Logout</a></li>
                                : <li className={getClassName("login")}><Link to="/login">Sign In</Link></li>}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;