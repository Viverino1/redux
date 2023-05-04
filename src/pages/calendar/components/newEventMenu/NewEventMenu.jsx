import Months from "../months/Months";
import { setIsDateSelectorActive } from "./newEventMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { dateString } from "../../../../app/components/navbar/NavBar";

const NewEventMenu = () => {
    const isDateSelectorActive = useSelector((state) => state.newEventMenu.isDateSelectorActive);
    const isNewEventMenuActive = useSelector((state) => state.newEventMenu.isNewEventMenuActive);

    const displayDay = useSelector((state) => state.months.displayDay)
    const displayMonth = useSelector((state) => state.months.displayMonth)
    const displayYear = useSelector((state) => state.months.displayYear)

    const dispatch = useDispatch();

    return(
        <div className="flex justify-center items-center">
            <div></div>

            <div className={`transition-all duration-400 overflow-clip z-20 ${isNewEventMenuActive? "w-96 opacity-100" : "w-0 opacity-0"}`}>
                <div className="bg-NavBarColor rounded-xl p-5 flex flex-col items-center space-y-5 w-96">
                    <div className="flex w-full items-center space-x-5 h-10">
                        <input type="text" placeholder="Add Title" className="bg-BodyColor focus:outline-none py-2 px-4 text-NavBarTextColor w-full rounded-xl"/>
                    </div>
                    <button className="flex w-full items-center space-x-5" onClick={() => dispatch(setIsDateSelectorActive(!isDateSelectorActive))}>
                        <div className="w-full px-4 py-2 bg-BodyColor rounded-xl select-none h-10">{dateString(new Date(displayYear + "-" + displayMonth + "-" + displayDay))}</div>
                    </button>
                    <button className="flex w-full items-center justify-center space-x-5 h-10">
                        <div className="bg-BodyColor h-10 px-4 flex justify-center items-center rounded-xl">11:00AM</div>
                        <div>-</div>
                        <div className="bg-BodyColor h-10 px-4 flex justify-center items-center rounded-xl">3:00PM</div>
                    </button>
                </div>
            </div>

            <div className={`absolute bg-NavBarColor z-10 rounded-xl transition-all duration-400 overflow-clip ${isDateSelectorActive? "translate-x-96 h-108 opacity-100" : "translate-x-0 h-0 opacity-0"}`}>
                <div className="p-5"><Months/></div>
            </div>
        </div>
    )
}

export default NewEventMenu;