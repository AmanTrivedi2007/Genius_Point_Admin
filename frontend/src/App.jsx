import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth/Login";
import RegesterPage from "./pages/auth/Register";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";


function App() {

    return (
        <BrowserRouter>

            <Routes>

                {/* Authentication */}
                <Route path="/" element={<HomePage />} />

                

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegesterPage />}
                />
                
                <Route
                    path="/contact"
                    element={<ContactPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;