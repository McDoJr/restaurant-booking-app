import styles from "./book-section.module.css";
import Calendar from "../../components/calendar.jsx";
import {forwardRef, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {DataContext} from "../../App.jsx";
import {reservation} from "../../utils/utils.js";
import {FaCircleCheck} from "react-icons/fa6";

const BookSection = ({ loggedIn }, ref) => {

    const {profile, profiles} = useContext(DataContext);
    const date = new Date();
    const [formData, setFormData] = useState({
        date: {day: date.getDate(), month: date.getMonth(), year: date.getFullYear()},
        time: "",
        persons: "",
        tables: "",
        note: ""
    })
    const [popup, setPopup] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const closePopup = () => setPopup(false);

    const addReservation = () => {
        const {persons, tables, note, date, time} = formData;
        // const {day, month, year} = date;
        const id = profile.reservations.length + 1001;
        const booking = reservation(id, persons, tables, note, date, time);
        profile.reservations.push(booking);
        localStorage.setItem("profiles", JSON.stringify(profiles));
    }

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

        if(formData.date.day < new Date().getDate()){
            validationErrors.date = "You cannot select an older date";
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
            addReservation();
            setPopup(true);
            setFormData({
                date: {day: date.getDate(), month: date.getMonth(), year: date.getFullYear()},
                time: "",
                persons: "",
                tables: "",
                note: ""
            });
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
                                <input type="number" value={formData.persons} name="persons" onChange={handleChange}/>
                            </div>
                            <div className={styles.field}>
                                <div>
                                    <label>Tables</label>
                                    {errors.tables && <span>{errors.tables}</span>}
                                </div>
                                <input type="number" value={formData.tables} name="tables" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles["bottom-row"]}>
                                <label>Add Note</label>
                                {errors.note && <span>{errors.note}</span>}
                            </div>
                            <textarea placeholder="Enter your note" value={formData.note} name="note" onChange={handleChange}></textarea>
                        </div>
                        <button>SUBMIT RESERVATION</button>
                    </form>
                    <Calendar handleDayTimeChange={handleDayTimeChange}/>
                </div>
            </div>
            <div onClick={closePopup} className={popup ? "bg-black/80 flex justify-center items-center absolute top-0 left-0 w-full h-screen z-10" : "hidden"}>
                <div className="p-[50px] flex flex-col justify-center items-center bg-white rounded-[15px]">
                    <FaCircleCheck className="text-green-500 w-[60px] h-[60px]"/>
                    <span className="mt-[20px] text-[30px] text-black">Reservation Success!</span>
                </div>
            </div>
        </section>
    )
}

export default forwardRef(BookSection);