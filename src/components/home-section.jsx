import styles from "./home-section.module.css";

const HomeSection = ({heading, background}) => {
    return (
        <section className={styles.container} style={{backgroundImage: `url(${background})`}}>
            <div className={styles.box}>
                {heading}
            </div>
        </section>
    )
}

export default HomeSection;