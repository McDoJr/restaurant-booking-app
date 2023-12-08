import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/home-page.jsx";
import ErrorPage from "./pages/error/error-page.jsx";
import "./App.css"
import MenuPage from "./pages/menu/menu-page.jsx";
import ReservationPage from "./pages/reservation/reservation-page.jsx";
import ContactPage from "./pages/contact/contact-page.jsx";
import LoginPage from "./pages/login/login-page.jsx";
import RegisterPage from "./pages/register/register-page.jsx";
import {createContext, useState} from "react";
import Settings from "./pages/account/settings.jsx";

export const DataContext = createContext(null);

const App = () => {

    const USERNAME = "admin", PASSWORD = "123456";

    const [profiles, setProfiles] = useState(() => {
        const PROFILES = localStorage.getItem("profiles");
        return PROFILES ? JSON.parse(PROFILES) : [];
    });
    const [uuid, setUuid] = useState(() => {
        const UUID = localStorage.getItem("uuid");
        return UUID ? JSON.parse(UUID) : 0;
    })

    const createProfile = (profile) => {
        profile.uuid = (1000 + profiles.length + 1);
        const updatedProfiles = [...profiles, profile];
        setProfiles(updatedProfiles);
        setLoggedIn(profile);
        localStorage.setItem("profiles", JSON.stringify(updatedProfiles))
    }

    const profile = profiles.find(profile => profile.uuid === uuid);

    const loggedIn = profile && Object.keys(profile).length > 0;
    const setLoggedIn = (data) => {
        if(data) {
            setUuid(data?.uuid);
            localStorage.setItem("uuid", JSON.stringify(data?.uuid));
        }else{
            setUuid(0);
            localStorage.removeItem("uuid");
        }
    }
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={
                    <DataContext.Provider value={{ loggedIn, setLoggedIn }}><HomePage/></DataContext.Provider>
                } />
                <Route path="/home" element={
                    <DataContext.Provider value={{ loggedIn, setLoggedIn }}><HomePage/></DataContext.Provider>
                } />
                <Route path="/menu" element={
                    <DataContext.Provider value={{ loggedIn, setLoggedIn }}><MenuPage/></DataContext.Provider>
                } />
                <Route path="/reservation" element={
                    <DataContext.Provider value={{ loggedIn, setLoggedIn, profile, profiles }}><ReservationPage/></DataContext.Provider>
                } />
                <Route path="/contact" element={
                    <DataContext.Provider value={{ loggedIn, setLoggedIn }}><ContactPage/></DataContext.Provider>
                } />
                <Route path="/settings" element={
                    <DataContext.Provider value={{ loggedIn, setLoggedIn, profile }}><Settings/></DataContext.Provider>
                } />
                <Route path="/login" element={
                    <DataContext.Provider value={{ USERNAME, PASSWORD, profiles, setLoggedIn }}><LoginPage/></DataContext.Provider>
                }/>
                <Route path="/register" element={
                    <DataContext.Provider value={{ loggedIn, setLoggedIn, createProfile }}><RegisterPage/></DataContext.Provider>
                } />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;