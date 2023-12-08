import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import './../App.css';
import imagen6 from "../img/salud_mental.jpg";

const RenderEventCard = () => {

    const [infoEvent, setInfoEvent] = useState([]);
    const backend_url = process.env.REACT_APP_URL_BACKEND ?? 'http://localhost:5001';

    useEffect(() => {
        fetch(`${backend_url}/getHelp`)
        .then((result) => result.json())
        .then((data) => {
          setInfoEvent(data);
        });
    }, []);

    return(
        <div><img
          className="d-block w-100"
          src={imagen6}
          alt="First slide"
    />
        
        <div className=" p-4 w-100">
        <div className=" row row-cols-1 row-cols-md-2  g-2">
            {infoEvent.map(item => {
                return(
                <EventCard key={item.id} 
                img={item.code_photo}
                name={item.company}
                title={item.title}
                provincie={item.provincie}
                country={item.country}
                //city={item.provincie}
                id={item.id}
                />)
            })}
            </div>
        </div>
        </div>
    );
};

export default RenderEventCard;