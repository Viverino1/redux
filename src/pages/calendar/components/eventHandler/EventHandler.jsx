import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../../firebase_setup/firebase";

const EventHandler = ({hour}) => {
    if(hour === 7){
        return(
            <div>
                <Event duration={60} title={"FTC Meeting"}/>
            </div>
        )
    }
}

const Event = ({duration, title}) => {
    const segmentCount =  duration / 5;
    const segments = [];
    for (let i = 1; i <= segmentCount; i++) {
        segments[i] = i;
    }

    return(
        <div className={"ml-24 mr-10 rounded-lg overflow-clip relative top-0 right-0 left-0"}>
            <ul className="bg-RedEventColor relative">
                <div className="text-white absolute h-full flex items-center pl-5">title</div>
                {segments.map(segment => (
                    <div key={segment}>
                        <Segment/>
                    </div>
                ))}
            </ul>
        </div>
    )
}

const Segment = () => {
    return(
        <div className="h-5min"/>
    )
}

export default EventHandler;