import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Subscriptions from "./components/Subscriptions/Subscriptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenContext from "./constexts/TokenContext";
import { useState } from "react";


export default function App() {
    const [token, setToken] = useState("");

    return (
        <TokenContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />}/>
                    <Route path="/subscriptions" element={<Subscriptions />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>

    );
}