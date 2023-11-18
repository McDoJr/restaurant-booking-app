import styles from "./book-section.module.css";
import Calendar from "../../components/calendar.jsx";

const BookSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <h1>Book Table Now</h1>
                <div className={styles.bottom}>
                    <form className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Number Of Persons</label>
                                <input type="number" name=""/>
                            </div>
                            <div className={styles.field}>
                                <label>Table</label>
                                <input type="number" name=""/>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <label>Add Note</label>
                            <textarea placeholder="Enter your note"></textarea>
                        </div>
                        <button>SUBMIT</button>
                    </form>
                    <Calendar />
                </div>
            </div>
        </section>
    )
}

export default BookSection;