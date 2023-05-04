import React from 'react';
import { CaretRight, CaretLeft } from "react-bootstrap-icons";
import { useSelector, useDispatch } from 'react-redux'
import { setDisplayDay, incrementDisplayMonth, decrementDisplayMonth } from './monthsSlice'
import { setIsDateSelectorActive } from '../newEventMenu/newEventMenuSlice';

const Months = () => {
    const displayDay = useSelector((state) => state.months.displayDay)
    const displayMonth = useSelector((state) => state.months.displayMonth)
    const displayYear = useSelector((state) => state.months.displayYear)
    const dispatch = useDispatch()

    const months = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekDays = ["S1", "M", "T1", "W", "T2", "F", "S2"];

    const daysInMonth = (month) => {
        if(month % 2 === 1){
            return 31
        }else if(month === 2){
            return 28
        }else{
            return 30
        }
    }

    const calculatePrevDays = () => {
        let day = new Date(displayYear + "-" + displayMonth + "-01").getDay();
        return day;
    }

    let previousDaysCount = calculatePrevDays();
    let futureDaysCount = (42 - daysInMonth(displayMonth)) - previousDaysCount;

    const days = [];
    for (let i = 1; i <= daysInMonth(displayMonth); i++) {
        days[i] = i;
    }

    const previousDays = [];
    for (let i = daysInMonth(displayMonth - 1) - previousDaysCount + 1; i <= daysInMonth(displayMonth - 1); i++) {
        previousDays[i] = i;
    }

    const futureDays = [];
    for (let i = 1; i <= futureDaysCount; i++) {
        futureDays[i] = i;
    }

    const CalendarDay = ({day}) => {
        if(day === displayDay){
            return(
                <button className="text-NavBarColor bg-RedEventColor transition-all w-8 h-8 rounded-lg flex justify-center items-center" onClick={() => {dispatch(setDisplayDay(day)); dispatch(setIsDateSelectorActive(false));}}> {day} </button>
            )
        }else{
            return(
                <button className="bg-NavBarColor hover:bg-BodyColor hover:border-LinesColor hover:rounded-lg border-BodyColor transition-all w-8 h-8 rounded-3xl border-2 flex justify-center items-center" onClick={() => {dispatch(setDisplayDay(day)); dispatch(setIsDateSelectorActive(false));}}> {day} </button>
            )
        }
    }

    const PlaceholderCalendarDay = ({day}) => {
        return(
            <div className="w-8 h-8 rounded-full flex justify-center items-center">{day}</div>
        )
    }

    return(
        <div className="grid grid-cols-7 grid-rows-8 gap-x-2 gap-y-4 border-BodyColor border-2 p-2 rounded-xl select-none">
            <div className="w-full flex items-center justify-center col-span-7 ">
                <div className="flex items-center justify-center w-fit bg-BodyColor px-2 rounded-xl">
                    <button onClick={() => dispatch(decrementDisplayMonth())} className="transition-all bg-BodyColor rounded-3xl border-BodyColor border-2 hover:border-LinesColor hover:border-2">
                        <CaretLeft color="gray" size={20}/>
                    </button>
                    <div className="w-48 h-8 bg-BodyColor px-5 py-3 flex justify-center items-center rounded-md">{months[displayMonth]} {displayYear}</div>
                    <button onClick={() => dispatch(incrementDisplayMonth())} className="transition-all bg-BodyColor rounded-3xl border-BodyColor border-2 hover:border-LinesColor hover:border-2">
                        <CaretRight color="gray" size={20}/>
                    </button>
                </div>
            </div>
            <div className='bg-BodyColor col-span-7 h-8 -mx-2 px-2'>
                <div className=' grid grid-cols-7 grid-rows-8 gap-x-2'>
                    {weekDays.map(wd => (
                        <div key={wd} className='w-8 h-8 flex justify-center items-center'>{wd.charAt(0)}</div>
                    ))}
                </div>
            </div>

            {previousDays.map(d => (
                <div key={d}><PlaceholderCalendarDay day={d}/></div>
            ))}

            {days.map(d => (
                <div key={d}><CalendarDay day={d}/></div>
            ))}

            {futureDays.map(d => (
                <div key={d}><PlaceholderCalendarDay day={d}/></div>
            ))}
        </div>
    )
}

export default Months;