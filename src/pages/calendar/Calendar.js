import DayView from "./components/dayView/DayView";
import Menu from "./components/menu/Menu";
import { useSelector, useDispatch } from 'react-redux'
import { setDisplayDay, setDisplayMonth, incrementDisplayMonth, decrementDisplayMonth } from './components/months/monthsSlice'

const Calendar = () => {
    const dispatch = useDispatch()

    const setCurrentDate = () => {
        const date = new Date();
        dispatch(setDisplayDay(date.getDate()))
        dispatch(setDisplayMonth(date.getMonth() + 1))
    }
    return(
        <div className="flex h-[calc(100vh-theme(space.16))]" onLoad={setCurrentDate()}>
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