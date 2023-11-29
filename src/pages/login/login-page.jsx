import styles from "./login-page.module.css";
import Header from "../../components/header.jsx";
import LoginSection from "./login-section.jsx";

const LoginPage = ({ username, password, setLoggedIn }) => {
    return (
        <>
            <Header currentPage="login" loggedIn={false}/>
            <LoginSection user={username} pass={password} setLoggedIn={setLoggedIn}/>
        </>
    )
}

export default LoginPage;