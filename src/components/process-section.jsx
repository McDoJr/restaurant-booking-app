import styles from "./process-section.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBurger, faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const ProcessSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.left}>
                    <h1>Simple steps to <br />make online booking</h1>
                    <span>Our mission is to filling your belly with <br />delicious food and excellent service.</span>
                    <button>GET IT NOW</button>
                </div>
                <div className={styles.right}>
                    <div>
                        <span>01</span>
                        <p>
                            <FontAwesomeIcon icon={faBurger} className={styles.icon}/>
                            <br/>
                            <br/>
                            Choose your
                            <br/>
                            favourite food
                        </p>
                    </div>
                    <div>
                        <span>02</span>
                        <p>
                            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon}/>
                            <br/>
                            <br/>
                            Confirm your
                            <br/>
                            order
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessSection;