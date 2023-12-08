import Header from "../../components/header.jsx";
import LoginSection from "./login-section.jsx";

const LoginPage = () => {
    return (
        <>
            <Header currentPage="login" loggedIn={false}/>
            <LoginSection/>
        </>
    )
}

export default LoginPage;