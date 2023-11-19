import styles from "./contact-section.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faPhone, faEnvelope, faClock} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {

    return (
        <section className={styles.container}>
            <div>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                <h3>Location</h3>
                <span>Narra Road, Butuan City</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faClock} className={styles.icon} />
                <h3>Open</h3>
                <span>Monday - Sunday</span>
                <span>8 am - 11 pm</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <h3>Email</h3>
                <span>triosrestaurant@gmail.com</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                <h3>Phone</h3>
                <span>+62 86800964</span>
            </div>
        </section>
    )
}

export default ContactSection;