import styles from "./inquire-section.module.css";

const InquireSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.box}d>
                <div className={styles.details}>
                    <div className={styles.desc}>
                        <h1>Do you have any <br /><mark>inquirements?</mark></h1>
                        <span>Feel free to message us!</span>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.row}>
                            <label>Subject</label>
                            <input type="text" />
                        </div>
                        <div className={styles.row}>
                            <label>Message</label>
                            <textarea />
                        </div>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
                <div className={styles.image}></div>
            </div>
        </section>
    )
}

export default InquireSection;