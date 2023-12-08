import styles from "./register-section.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {DataContext} from "../../App.jsx";
import {profile} from "../../utils/utils.js";

const RegisterSection = () => {

    const [formData, setFormData] = useState({firstname: "", lastname: "", email: "", phone: "", password: "", confirm_password: ""});
    const {createProfile} = useContext(DataContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {firstname, lastname, email, phone, password, confirm_password} = formData;

        createProfile(profile(firstname, lastname, email, phone, password));
        navigate("/");
    }

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label>First Name</label>
                        <input type="text" name="firstname" onChange={handleChange}/>
                    </div>
                    <div className={styles.field}>
                        <label>Last Name</label>
                        <input type="text" name="lastname" onChange={handleChange}/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label>Email Address</label>
                        <input type="email" name="email" onChange={handleChange}/>
                    </div>
                    <div className={styles.field}>
                        <label>Phone Number</label>
                        <input type="number" name="phone" onChange={handleChange}/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label>Password</label>
                        <input type="password" name="password" onChange={handleChange}/>
                    </div>
                    <div className={styles.field}>
                        <label>Confirm Password</label>
                        <input type="password" name="confirm_password" onChange={handleChange}/>
                    </div>
                </div>
                <button>SUBMIT</button>
                <span>Already have an account? <Link to="/login">Login</Link></span>
            </form>
        </section>
    )
}

export default RegisterSection;