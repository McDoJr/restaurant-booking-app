import styles from "./register-section.module.css";
import {Link} from "react-router-dom";

const RegisterSection = () => {
    return (
        <section className={styles.container}>
            <form className={styles.form}>
                <h1>Register</h1>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label>First Name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.field}>
                        <label>Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label>Email Address</label>
                        <input type="text" />
                    </div>
                    <div className={styles.field}>
                        <label>Phone Number</label>
                        <input type="number" />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div className={styles.field}>
                        <label>Confirm Password</label>
                        <input type="password" />
                    </div>
                </div>
                <button>SUBMIT</button>
                <span>Already have an account? <Link to="/login">Login</Link></span>
            </form>
        </section>
    )
}

export default RegisterSection;