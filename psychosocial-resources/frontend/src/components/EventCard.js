import React from "react";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const EventCard = (props) => {

    const navigate = useNavigate();

    const navigateToSingleEvent = () => {
    navigate(`${props.id}`)
    }

    return (
        <><div className="card_event col-md-5" key={props.id}>
            <div className="card_body">
                <img className="card-img-top" src={props.img} alt="Card image cap"/>
                <div className="card_text">
                <h3 className="card_title">{props.name}</h3>
                <hr className="hr" />
                <h4 className="card_title">{props.title}</h4>
                <div className="city_date_time">
                    <h2>{props.provincie} - {props.country}</h2>
                </div>
            </div>
        </div>
        <button class="ov-btn-grow-ellipse" onClick={() => navigateToSingleEvent(props.id)}>MORE INFO</button>
        </div>
    </>)
}

export default EventCard;