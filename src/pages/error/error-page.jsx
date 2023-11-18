import styles from "./error-page.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRectangleXmark} from "@fortawesome/free-regular-svg-icons";
import {useNavigate} from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <FontAwesomeIcon icon={faRectangleXmark} className={styles.icon}/>
                <h1>Error. Page not found!</h1>
            </div>
            <button onClick={() => navigate("/home")}>HOME PAGE</button>
        </section>
    )
}

export default ErrorPage;