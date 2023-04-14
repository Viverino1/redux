import { GearFill } from "react-bootstrap-icons";
import { useSelector } from 'react-redux'

const NavBar = () => {
    const displayDay = useSelector((state) => state.months.displayDay)

    return(
        <div>
            <div className="absolute bottom-0 bg-BodyColor h-0.5 w-full"></div>
            <div className="w-full h-16 flex items-center justify-between bg-NavBarColor text-NavBarTextColor">
                <button className="pl-3">
                    <img src="./cosmic.png" alt="Cosmic Logo" className="w-10 rounded-3xl"/>
                </button>

                <div>Thursday, March {displayDay}th, 2023</div>

                <button className="pr-3">
                    <GearFill color="gray" size={30}/>
                </button>
            </div>
        </div>
    )
}

export default NavBar;