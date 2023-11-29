import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/home-page.jsx";
import ErrorPage from "./pages/error/error-page.jsx";
import "./App.css"
import MenuPage from "./pages/menu/menu-page.jsx";
import ReservationPage from "./pages/reservation/reservation-page.jsx";
import ContactPage from "./pages/contact/contact-page.jsx";
import LoginPage from "./pages/login/login-page.jsx";
import RegisterPage from "./pages/register/register-page.jsx";
import {useState} from "react";

const App = () => {

    const USERNAME = "admin", PASSWORD = "123456";
    
    const [loggedIn, setLoggedIn] = useState(false);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                <Route path="/home" element={<HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                <Route path="/menu" element={<MenuPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                <Route path="/reservation" element={<ReservationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                <Route path="/contact" element={<ContactPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                <Route path="/login" element={<LoginPage username={USERNAME} password={PASSWORD} setLoggedIn={setLoggedIn}/>}/>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;