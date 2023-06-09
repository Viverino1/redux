import DayView from "./components/dayView/DayView";
import Menu from "./components/menu/Menu";
import { useDispatch, useSelector } from 'react-redux'
import { setDisplayDay, setDisplayMonth} from './components/months/monthsSlice'
import { setIsNewEventMenuActive, setIsDateSelectorActive } from "./components/newEventMenu/newEventMenuSlice";
import NewEventMenu from "./components/newEventMenu/NewEventMenu";

const Calendar = () => {
    const dispatch = useDispatch()
    const isNewEventMenuActive = useSelector((state) => state.newEventMenu.isNewEventMenuActive);

    const setCurrentDate = () => {
        const date = new Date();
        dispatch(setDisplayDay(date.getDate()))
        dispatch(setDisplayMonth(date.getMonth() + 1))
    }

    return(
        <div className="flex h-[calc(100vh-theme(space.16))] justify-center items-center select-none" onLoad={setCurrentDate()}>
            <div className="w-full h-full flex">
                <div>
                    <Menu/>
                </div>
                <div className="relative w-full overflow-y-scroll overflow-x-clip">
                    <DayView/>
                </div>
            </div>

            <div className="absolute bottom-5 right-5">
                <button className="bg-NavBarColor text-NavBarTextColor w-16 h-16 rounded-full text-3xl flex justify-center items-center"
                onClick={() => {dispatch(setIsNewEventMenuActive(!isNewEventMenuActive)); dispatch(setIsDateSelectorActive(false))}}>
                    <div className="select-none">+</div>
                </button>
            </div>

            <div className={`absolute`}>
                <NewEventMenu/>
            </div>
        </div>
    )
}

export default Calendar;