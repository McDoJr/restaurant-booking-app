import styles from "./login-section.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const LoginSection = ({ user, pass, setLoggedIn }) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username === user && password === pass) {
            setLoggedIn(true);
            navigate("/");
        }else {
            setUsername("");
            setPassword("");
        }
    }

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className={styles.row}>
                    <label>Email Address</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className={styles.row}>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button>SUBMIT</button>
                <span>Do you have an account yet? <Link to="/register">Register</Link></span>
            </form>
        </section>
    )
}

export default LoginSection;