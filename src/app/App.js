import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Calendar from "../pages/calendar/Calendar";
import NavBar from "./components/navbar/NavBar";

const App = () => {
    return(
        <div>
            <div className="fixed top-0 right-0 left-0">
                <NavBar/>
            </div>
            <div className="fixed top-16 right-0 left-0 bottom-0 bg-BodyColor text-LinesColor">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/calendar" element={<Calendar/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;