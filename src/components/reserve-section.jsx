import styles from "./reserve-section.module.css";


const ReserveSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <h1>Make You Reservation Now</h1>
                <button>BOOK NOW</button>
            </div>
        </section>
    )
}

export default ReserveSection;