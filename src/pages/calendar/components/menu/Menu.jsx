import { List } from "react-bootstrap-icons";
import Months from "../months/Months";

const Menu = ({enable}) => {
    return(
        <div className="relative transition-width hover:w-96 w-16 duration-300 h-[calc(100vh-theme(space.16))] bg-NavBarColor group overflow-clip">
            <div className="absolute top-0 left-0 w-16 h-full">
                <div className="absolute right-0 top-0 bottom-0 h-full w-0.5 bg-BodyColor"></div>
                <div className="h-16 w-16 flex justify-center items-center">
                    <List color="gray" size={40}/>
                </div>
            </div>
            <div className="absolute top-0 pl-16 w-full">
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