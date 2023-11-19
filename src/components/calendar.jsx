import styles from "./calendar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {getMonth, getDays, weeks} from "../utils/utils.js";
import {useState} from "react";

const Calendar = () => {
    let date = new Date(),
        currDay = date.getDay(),
        currMonth = date.getMonth(),
        currYear = date.getFullYear();

    const [days, setDays] = useState(getDays(date, currYear, currMonth));
    const [day, setDay] = useState(currDay);
    const [month, setMonth] = useState(currMonth);
    const [monthName, setMonthName] = useState(getMonth(currMonth));
    const [year, setYear] = useState(currYear);

    const timeList = [];

    for(let i = 8; i <= 20; i++) {
        const time = i > 12 ? i - 12 : i;
        const timeOfDay = i >= 12 ? 'PM' : 'AM';
        const finalTime = `${time}:00 ${timeOfDay}`;
        timeList.push(finalTime);
    }

    const handleDate = (amount) => {
        currMonth = month + amount;
        date = new Date(year, currMonth, new Date().getDate());
        currYear = date.getFullYear();
        currMonth = date.getMonth();
        setMonth(currMonth);
        setYear(currYear);
        setMonthName(getMonth(currMonth));
        setDays(getDays(date, currYear, currMonth));
    }

    const handleDay = (e, day) => {
        e.preventDefault();

        console.log(day);
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} onClick={() => handleDate(-1)} />
                <h1>{`${monthName} ${year}`}</h1>
                <FontAwesomeIcon icon={faAngleRight} className={styles.icon} onClick={() => handleDate(1)} />
            </div>
            <div className={styles.middle}>
                <ul className={styles.weeks}>
                    {weeks().map((week, index) => <li key={index}>{week}</li>)}
                </ul>
                <ul className={styles.days}>
                    {days.map(({day, name}, index) =>
                        <li className={styles[name]} key={index} onClick={(e) => handleDay(e, day)}>{day}</li>)}
                </ul>
            </div>
            <div className={styles.bottom}>
                <label>Select Time :</label>
                <select>{
                    timeList.map((time, index) => <option value={time} key={index}>{time}</option>)
                }</select>
            </div>
        </div>
    )
}

export default Calendar;