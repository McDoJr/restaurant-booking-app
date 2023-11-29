import styles from "./book-section.module.css";
import Calendar from "../../components/calendar.jsx";
import {forwardRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const BookSection = ({ loggedIn }, ref) => {

    const [formData, setFormData] = useState({
        day: new Date().getDate(),
        time: "",
        persons: "",
        tables: "",
        note: ""
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleDayTimeChange = (name, value) => {
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleReservation = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if(formData.day < new Date().getDate()){
            validationErrors.day = "You cannot select an older date";
        }
        if(!formData.time) {
            validationErrors.time = "time is required";
        }
        if(!formData.persons) {
            validationErrors.persons = "required";
        }
        if(!formData.tables) {
            validationErrors.tables = "required";
        }
        if(!formData.note) {
            validationErrors.note = "you must leave a note"
        }

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0) {
            // if(!loggedIn){
            //     navigate("/login");
            // }
            alert("Submission success!");
        }else{

        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <h1 ref={ref}>Book Table Now</h1>
                <div className={styles.bottom}>
                    <form className={styles.form} onSubmit={handleReservation}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <div>
                                    <label>Persons</label>
                                    {errors.persons && <span>{errors.persons}</span>}
                                </div>
                                <input type="number" name="persons" onChange={handleChange}/>
                            </div>
                            <div className={styles.field}>
                                <div>
                                    <label>Tables</label>
                                    {errors.tables && <span>{errors.tables}</span>}
                                </div>
                                <input type="number" name="tables" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles["bottom-row"]}>
                                <label>Add Note</label>
                                {errors.note && <span>{errors.note}</span>}
                            </div>
                            <textarea placeholder="Enter your note" name="note" onChange={handleChange}></textarea>
                        </div>
                        <button>SUBMIT RESERVATION</button>
                    </form>
                    <Calendar handleDayTimeChange={handleDayTimeChange}/>
                </div>
            </div>
        </section>
    )
}

export default forwardRef(BookSection);