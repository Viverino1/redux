import React, { useState } from 'react';
import { CaretRight, CaretLeft } from "react-bootstrap-icons";
import { useSelector, useDispatch } from 'react-redux'
import { setDisplayDay } from './monthsSlice'

const Months = () => {
    const displayDay = useSelector((state) => state.months.displayDay)
    const dispatch = useDispatch()

    const [today, setToday] = useState(4);

    const days = [];
    for (let i = 1; i <= 31; i++) {
        days[i] = i;
    }

    function isActiveDay(day){
        return day == displayDay? true : false;
    }

    function CalendarDay({day}){
        if(isActiveDay(day)){
            return(
                <button className="text-NavBarColor bg-RedEventColor transition-all w-8 h-8 rounded-lg flex justify-center items-center" onClick={() => {dispatch(setDisplayDay(day));}}> {day} </button>
            )
        }else{
            return(
                <button className="bg-NavBarColor hover:bg-BodyColor hover:border-LinesColor hover:rounded-lg border-BodyColor transition-all w-8 h-8 rounded-3xl border-2 flex justify-center items-center" onClick={() => {dispatch(setDisplayDay(day))}}> {day} </button>
            )
        }
    }

    return(
        <div className="grid grid-cols-7 grid-rows-7 gap-x-2 gap-y-4 border-BodyColor border-2 p-2 rounded-xl select-none">
            <div className="w-full flex items-center justify-center col-span-7 ">
                <div className="flex items-center justify-center w-fit bg-BodyColor px-2 rounded-xl">
                    <div className="transition-all bg-BodyColor rounded-3xl border-BodyColor border-2 hover:border-LinesColor hover:border-2">
                        <CaretLeft color="gray" size={20}/>
                    </div>
                    <div className="w-fit h-8 bg-BodyColor px-5 py-3 flex justify-center items-center rounded-md">{displayDay}</div>
                    <div className="transition-all bg-BodyColor rounded-3xl border-BodyColor border-2 hover:border-LinesColor hover:border-2">
                        <CaretRight color="gray" size={20}/>
                    </div>
                </div>
            </div>
            {days.map(d => (
                <CalendarDay day={d}/>
            ))}
        </div>
    )
}

export default Months;