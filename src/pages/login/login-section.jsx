import styles from "./login-section.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {DataContext} from "../../App.jsx";

const LoginSection = () => {

    const navigate = useNavigate();

    const {USERNAME, PASSWORD, setLoggedIn, profiles} = useContext(DataContext);

    const [formData, setFormData] = useState({email: "", password: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = formData;
        const profile = profiles.find(profile => profile.email === email && profile.password === password);
        if(profile || (USERNAME === email && PASSWORD === password)) {
            setLoggedIn(profile);
            navigate("/");
        }else{
            setFormData({email: "", password: ""});
        }
    }

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className={styles.row}>
                    <label>Email Address</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div className={styles.row}>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                </div>
                <button>SUBMIT</button>
                <span>Do you have an account yet? <Link to="/register">Register</Link></span>
            </form>
        </section>
    )
}

export default LoginSection;