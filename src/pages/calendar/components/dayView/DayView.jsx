import EventHandler from "../eventHandler/EventHandler";
const DayView = () => {
    const lines = [];
    for (let i = 1; i <= 24; i++) {
        lines[i] = i;
    }

    return(
        <div>
            <ul className="mt-3">
                {lines.map(line => (
                    <li className="flex h-event">
                        <div className="w-20 pl-5 -mt-3 text-LinesColor" >{line <= 12? line + " AM" : line-12 + " PM"}</div>
                        <div className="w-full h-px bg-LinesColor mb-16 mr-5"/>
                        <div className="absolute w-full">
                            <EventHandler hour={line}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DayView;