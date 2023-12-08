import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Maps from "../../components/Maps";
import './SingleEvent.css';


const SingleEvent = () => {
    
    
    const [moreInfo, setMoreInfo] = useState([]);
    const eventId = useParams();
    const backend_url = process.env.REACT_APP_URL_BACKEND ?? 'https://migramind-7imp.vercel.app/';

    useEffect(()=> {
        fetch(`${backend_url}/getHelp/${eventId.id}`)
        .then((result) => result.json())
        .then((data) => {
        setMoreInfo(data);
        });
    }, [])

    return (
        <div className="big-div">
            {moreInfo.map(item => {
                    return( 
                        <div key={item.id}>
                            <h1 className="h1-single-event">{item.company}</h1>
                            <hr/>
                            <img className="img-single-event" src={item.code_photo}/>
                            <h3 className="h3-single-event">{item.title}</h3>
                            <p className="description-single-event">{item.description}</p>
                            <p className="p-single-event">For specific help information,  <a target="_blank" href={item.url_schedule}>click here</a></p>
                            <p className="p-single-event">{item.type_of_company}</p>
                            <p className="p-single-event">{item.attention_schedule}</p>
                        </div>
                        ) 
                    })}
                    <Maps />
        </div>
    );
}

export default SingleEvent;