import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquareYoutube} from "@fortawesome/free-brands-svg-icons";
import styles from "./header.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import {DataContext} from "../App.jsx";
import {FaCircleUser} from "react-icons/fa6";

const Header = ({ currentPage}) => {

    const navigate = useNavigate();
    const ref = useRef(null);
    const {loggedIn, setLoggedIn} = useContext(DataContext);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const handleEvent = (e) => {
            if(!ref.current.contains(e.target)){
                setDropdown(false);
            }
        }

        document.addEventListener('click', handleEvent);

        return () => {
            document.removeEventListener('click', handleEvent);
        }
    }, []);

    const toggleDropdown = () => setDropdown(!dropdown);

    const getClassName = (pageName) => {
        return pageName === currentPage ? styles.active : '';
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.top}>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        <span>triosrestaurant@gmail.com</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSquareFacebook} className={styles.icon}/>
                        <FontAwesomeIcon icon={faSquareTwitter} className={styles.icon}/>
                        <FontAwesomeIcon icon={faSquareInstagram} className={styles.icon}/>
                        <FontAwesomeIcon icon={faSquareYoutube} className={styles.icon}/>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h1 onClick={() => navigate("/")}>~TRIO'S~</h1>
                    <div>
                        <ul>
                            <li className={getClassName("home")}><Link to="/home">Home</Link></li>
                            <li className={getClassName("menu")}><Link to="/menu">Menu</Link></li>
                            <li className={getClassName("reservation")}><Link to="/reservation">Reservation</Link></li>
                            <li className={getClassName("contact")}><Link to="/contact">Contact</Link></li>
                            {loggedIn ?
                                <li className="ml-[20px] relative select-none" ref={ref}>
                                    <FaCircleUser className="w-[25px] h-[25px]" onClick={toggleDropdown}/>
                                    <div className={dropdown ? "flex flex-col absolute left-[-30px] top-[40px] bg-white text-black p-[10px] rounded-[10px] text-[14px] shadow-zinc-600 shadow-md" : "hidden"}>
                                        <span onClick={() => navigate("/settings")} className="font-bold py-[5px] px-[30px] hover:text-zinc-500 border-transparent border-b hover:border-solid hover:border-zinc-400 cursor-pointer">Settings</span>
                                        <span onClick={() => {setLoggedIn(false); toggleDropdown()}} className="font-bold py-[5px] px-[30px] hover:text-zinc-500 border-transparent border-b hover:border-solid hover:border-zinc-400 cursor-pointer">Logout</span>
                                    </div>
                                </li>
                                : <li className={getClassName("login")}><Link to="/login">Sign In</Link></li>}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;