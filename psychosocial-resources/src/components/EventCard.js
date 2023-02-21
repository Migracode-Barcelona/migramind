import React from "react";
import { useNavigate } from 'react-router-dom';
import MoreInfoButton from "./MoreInfoButton";

const EventCard = (props) => {

    const navigate = useNavigate();

    const navigateToSingleEvent = () => {
        // navigate(`:${props.id}`)
        navigate('/events/4')
    }

    return (
        <div className="card_event" key={props.id}>
            <div className="card_body">
                <img src={props.img}></img>
                <h2 className="card_title">{props.title}</h2>
                <h1 className="card_title">{props.name}</h1>
                <p className="card_info">{props.description}</p>
                <div className="date_time">
                    <p>{props.date}</p>
                    <p>{props.time}</p>
                </div>
            </div>
            <button className="card_button" onClick={navigateToSingleEvent}>
                More info
            </button>
        </div>
    )
}

export default EventCard;