import styles from "./calendar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {currentMonth, currentYear, days} from "../utils/utils.js";

const Calendar = () => {

    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let list = days();

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
                <h1>{`${currentMonth()} ${currentYear()}`}</h1>
                <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
            </div>
            <div className={styles.middle}>
                <ul className={styles.weeks}>
                    {weeks.map((week, index) => <li key={index}>{week}</li>)}
                </ul>
                <ul className={styles.days}>
                    {list.map(({day, name}, index) => <li className={styles[name]} key={index}>{day}</li>)}
                </ul>
            </div>
            <div className={styles.bottom}></div>
        </div>
    )
}

export default Calendar;