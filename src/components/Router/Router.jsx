import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import LandingPage from "../../pages/LandingPage/LandingPage"
import SignInPage from "../../pages/SignInPage/SignInPage"
import UserPage from "../../pages/UserPage/UserPage"


function AppRouter() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/profile" element={<UserPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}


export default AppRouter;