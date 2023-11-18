import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/home-page.jsx";
import ErrorPage from "./pages/error/error-page.jsx";
import "./App.css"
import MenuPage from "./pages/menu/menu-page.jsx";
import ReservationPage from "./pages/reservation/reservation-page.jsx";
import ContactPage from "./pages/contact/contact-page.jsx";
import AccountPage from "./pages/account/account-page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;