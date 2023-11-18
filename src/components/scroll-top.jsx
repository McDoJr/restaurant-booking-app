import styles from "./scroll-top.module.css";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {

    const [active, setActive] = useState(false);

    window.addEventListener('scroll', () => {
       setActive(window.scrollY > 100);
    });

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }

    const getClassName = () => {
        return active ? `${styles.icon} ${styles.active}` : `${styles.icon}`;
    }

    return <FontAwesomeIcon icon={faCaretUp} className={getClassName()} onClick={scrollToTop}/>
}

export default ScrollTop;