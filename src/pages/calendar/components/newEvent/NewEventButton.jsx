import { Plus } from "react-bootstrap-icons";
import ApiCalendar from "react-google-calendar-api";

const NewEventButton = () => {

    const config = {
        clientId: "216466308050-ing0f2pgdst6qpnklr531i71m5k2fegb.apps.googleusercontent.com",
        apiKey: "AIzaSyC88Z_DM8xk21A6wTZo1m_GqnvJoPj8Ooo",
        scope: "https://www.googleapis.com/auth/calendar",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        ],
    };

    const apiCalendar = new ApiCalendar(config);

    const addNewEvent = () => {
        apiCalendar.handleAuthClick();
    }

    return(
        <div className="pt-16">
            <button className="w-16 h-16 flex items-center justify-center rounded-3xl bg-BodyColor transition-all duration-300" onClick={() => {addNewEvent()}}>
                <Plus color="gray" size={40}/>
            </button>
        </div>
    )
}

export default NewEventButton;