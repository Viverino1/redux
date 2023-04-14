import { List } from "react-bootstrap-icons";
import { useSelector, useDispatch } from 'react-redux'
import { toggleIsActive } from "../../../pages/calendar/components/menu/menuSlice";

const NavBar = () => {
    const displayDay = useSelector((state) => state.months.displayDay)
    const displayMonth = useSelector((state) => state.months.displayMonth)
    const displayYear = useSelector((state) => state.months.displayYear)

    const dispatch = useDispatch()

    const months = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let dayOfWeek = new Date(displayYear + "-" + displayMonth + "-" + displayDay).getDay();
    let ending;

    switch(displayDay){
        case 1:
        case 21:
        case 31:
            ending = "st"
            break;
        case 2:
        case 22:
            ending = "nd"
            break;
        case 3:
        case 23:
            ending = "rd"
            break;
        default:
            ending = "th"
            break;
    }

    return(
        <div>
            <div className="absolute bottom-0 bg-BodyColor h-0.5 w-full"></div>
            <div className="w-full h-16 bg-NavBarColor text-NavBarTextColor flex justify-center items-center">
                <button className="pl-3 absolute top-0 left-0 h-16" onClick={() => {dispatch(toggleIsActive())}}>
                    <List color="gray" size={40}/>
                </button>

                <div>{weekDays[dayOfWeek]}, {months[displayMonth]} {displayDay}{ending}, {displayYear}</div>

                <button className="pr-3 absolute top-0 right-0 h-16 flex justify-center items-center space-x-5">
                    <div>Cosmic</div>
                    <img src="./cosmic.png" alt="Cosmic Logo" className="w-10 rounded-3xl"/>
                </button>
            </div>
        </div>
    )
}

export default NavBar;