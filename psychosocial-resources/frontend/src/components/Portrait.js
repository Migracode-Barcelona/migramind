import Amanda from "../img/amanda.jpeg"
import Avatara from "../img/avatara.jpeg"
import Avataro from "../img/avataro.jpeg"
import '../routes/about/About.css'

const Portrait = (props) => {
    return (
        <div className="portrait">
            <img src={props.photo}/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Portrait