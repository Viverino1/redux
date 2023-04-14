import DayView from "./components/dayView/DayView";
import Menu from "./components/menu/Menu";
const Calendar = () => {
    return(
        <div className="flex h-[calc(100vh-theme(space.16))]">
            <div className="relative top-0 left-0 bottom-0">
                <Menu/>
            </div>
            <div className="relative top-0 right-0 left-0 bottom-0 w-full overflow-scroll">
                <DayView/>
            </div>
        </div>
    )
}

export default Calendar;