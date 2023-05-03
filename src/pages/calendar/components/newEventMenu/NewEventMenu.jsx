import Months from "../months/Months";
import { useState } from "react";
import { setIsDateSelectorActive } from "./newEventMenuSlice";
import { useDispatch, useSelector } from "react-redux";

const NewEventMenu = () => {
    const isDateSelectorActive = useSelector((state) => state.newEventMenu.isDateSelectorActive)
    const dispatch = useDispatch();

    return(
        <div className="flex justify-center items-center">
            <div></div>
            <div className="bg-NavBarColor rounded-xl w-96 p-5 flex flex-col items-center space-y-5 z-20">
                <div className="flex w-full items-center space-x-5 h-10">
                    <input type="text" placeholder="Add Title" className="bg-BodyColor focus:outline-none py-2 px-4 text-NavBarTextColor w-full rounded-xl"/>
                </div>
                <button className="flex w-full items-center space-x-5" onClick={() => dispatch(setIsDateSelectorActive(!isDateSelectorActive))}>
                    <div className="w-full px-4 py-2 bg-BodyColor rounded-xl select-none h-10">Monday, June 5th, 2023</div>
                </button>
                <button className="flex w-full items-center justify-center space-x-5 h-10">
                    <div className="bg-BodyColor h-10 px-4 flex justify-center items-center rounded-xl">11:00AM</div>
                    <div>-</div>
                    <div className="bg-BodyColor h-10 px-4 flex justify-center items-center rounded-xl">3:00PM</div>
                </button>
            </div>

            <div className={`absolute bg-NavBarColor p-5 z-10 rounded-xl transition-all duration-400 overflow-hidden ${isDateSelectorActive? "translate-x-96 h-108" : "translate-x-0 h-0"}`}>
                <Months/>
            </div>
        </div>
    )
}

export default NewEventMenu;