import { useEffect, useState } from "react";
import { Plus } from "react-bootstrap-icons";

const NewEventButton = () => {
    const [isActive, setIsActive] = useState(false);

    const addNewEvent = () => {
        console.log("new event")
    }

    return(
        <div className="pt-16">
            <button className="w-16 h-16 flex items-center justify-center rounded-3xl bg-BodyColor transition-all duration-300" onClick={() => {setIsActive(!isActive); addNewEvent()}}>
                <Plus color="gray" size={40}/>
            </button>
        </div>
    )
}

export default NewEventButton;