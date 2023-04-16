import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Calendar from "../pages/calendar/Calendar";
import Login from "../pages/signin/Signin";
import NavBar from "./components/navbar/NavBar";
import ProfileMenu from "./components/profileMenu/ProfileMenu";

const App = () => {
    return(
        <div>
            <div className="fixed top-0 right-0 left-0">
                <NavBar/>
            </div>
            <div className="fixed top-16 right-0 left-0 bottom-0 bg-BodyColor text-LinesColor">
                <div className="fixed top-16 z-40 right-0">
                    <ProfileMenu/>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/calendar" element={<Calendar/>}/>
                    <Route path="/signin" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;