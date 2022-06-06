import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Subscriptions from "./components/Subscriptions/Subscriptions";
import Plan from "./components/Plan/Plan";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./constexts/UserContext";
import { useState } from "react";



export default function App() {
    const [user, setUser] = useState({});

    return (
            <UserContext.Provider value={{user, setUser}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/sign-up" element={<SignUp />}/>
                        <Route path="/subscriptions" element={<Subscriptions />} />
                        <Route path="/subscriptions/:planId" element={<Plan />} />
                        <Route path="/home" element={<Home />}/>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>  
    );
}