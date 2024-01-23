import "./Results.css";
import { useState, useEffect } from "react";
import EventCard from "../../components/EventCard";
import imagen6 from "../../img/salud_mental.jpg";
import { useSearchParams } from "react-router-dom";

const Results = () => {

    const [event, setEvent] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const input = searchParams.get('search');
    const backend_url = process.env.REACT_APP_URL_BACKEND ?? 'https://migramind-7imp.vercel.app/';
    
    useEffect(() => {
        const base = `${backend_url}/searchEvent/`
        const url = input ? `${base}?eventQuery=${input}` : base
        fetch(url)
        .then((result) => result.json())
        .then((data) => {
            setEvent(data)
        });
    }, [input]);

    return(
        <div><img
          className="d-block w-100"
          src={imagen6}
          alt="First slide"
        />
        
        <div className=" p-4 w-100">
        <div className=" row row-cols-1 row-cols-md-2  g-2">
            {event.length > 0 ? event.map(item => {
                return(
                <EventCard key={item.id} 
                img={item.code_photo}
                name={item.company}
                title={item.title}
                provincie={item.provincie}
                country={item.country}
                id={item.id}
                />)
            }) : (<h1 id="h-not-found">Sorry. We did not find any events related to your search.</h1>)}
            </div>
        </div>
        </div>
    );
}

export default Results;