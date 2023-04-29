import { useSelector } from 'react-redux'
import Months from "../months/Months";

const Menu = () => {

    const isActive = useSelector((state) => state.menu.isActive)

    return(
        <div className={`relative transition-width ${isActive ? "w-80" : "w-0"} duration-400 ease-in-out h-[calc(100vh-theme(space.16))] bg-NavBarColor overflow-clip`}>
            <div className="w-80">
                <div className="h-16 w-full flex justify-center items-center overflow-clip">
                    Menu
                </div>
                <div className="w-full flex justify-center items-center overflow-clip">
                    <Months/>
                </div>
            </div>
        </div>
    )
}

export default Menu; 