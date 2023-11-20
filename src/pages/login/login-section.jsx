import styles from "./login-section.module.css";
import {Link} from "react-router-dom";

const LoginSection = () => {
    return (
        <section className={styles.container}>
            <form className={styles.form}>
                <h1>Login</h1>
                <div className={styles.row}>
                    <label>Email Address</label>
                    <input type="text" />
                </div>
                <div className={styles.row}>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button>SUBMIT</button>
                <span>Do you have an account yet? <Link to="/register">Register</Link></span>
            </form>
        </section>
    )
}

export default LoginSection;