import styles from "./about-section.module.css";
import {useNavigate} from "react-router-dom";

const AboutSection = () => {

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.image}></div>
                <div className={styles.details}>
                    <h2>About Us</h2>
                    <h3>Good food for a <br />healthy lifestyle</h3>
                    <p>We are best Food Maker and Best Delivery restaurant to our customers
                        and find your favourite restaurants available in your zone. We have
                        than 1000 of menus online. It's quick, easy and totally secure.</p>
                    <button onClick={() => navigate("/menu")}>EXPLORE NOW</button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;