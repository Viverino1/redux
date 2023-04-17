import { useSelector } from 'react-redux'
import Months from "../months/Months";
import NewEventButton from '../newEvent/NewEventButton';

const Menu = () => {
    const isActive = useSelector((state) => state.menu.isActive)
    return(
        <div className={`relative transition-width ${isActive ? "w-80" : "w-0"} duration-300 h-[calc(100vh-theme(space.16))] bg-NavBarColor overflow-clip`}>
            <div className="absolute top-0 w-full">
                <div className="h-16 w-full flex justify-center items-center overflow-clip">
                    Menu
                </div>
                <div className="w-full flex justify-center items-center overflow-clip">
                    <Months/>
                </div>
                <div className="w-full flex justify-center items-center overflow-clip">
                    <NewEventButton/>
                </div>
            </div>
        </div>
    )
}

export default Menu; 