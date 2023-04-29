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
            <div className="">
                <Menu/>
            </div>
            <div className="relative w-full overflow-y-scroll overflow-x-clip">
                <DayView/>
            </div>
        </div>
    )
}

export default Calendar;