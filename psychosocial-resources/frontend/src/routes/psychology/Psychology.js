import Psy from '../../img/psy-1.jpg';
import './Psychology.css'
import { useNavigate } from 'react-router-dom';


const Psychology = (props) => {

     const navigate = useNavigate();

    const onClickOpenVacancy = () => {
    navigate(`${props.id}`)
    }
    
    return(
        <div>
            <div className="page" >
                <main className="main">
                    <img src={Psy} />
                    <h3 align="center" >Important information</h3>
                    <div className="card-bottom row row-cols-1 row-cols-md-2  g-2">
                        <div className='card-main card_event col-md-5'>
                            <h3 align="center">Why is psychology important?</h3>
                             <hr className="hr" />
                            <p>Psychology is defined as a science of social study specialized in the comprehensive analysis of mental processes and behavior of human beings, from an individual and collective approach in different events of daily life.</p>

                            <button  className="ov-btn-grow-ellipse" onClick={() => window.open("https://unibetas.com/que-es-la-psicologia", '_blank')}>More info</button>

                        </div>
                        <div className='card-main card_event col-md-5'>
                            <h3 align="center">Advantages of seeing a psychologist</h3>
                             <hr className="hr" />
                            <p>The psychologist is a qualified professional, capable of listening to the patient in a neutral way, establishing a relationship based on respectful dialogue.</p>
                               
                             <button  className="ov-btn-grow-ellipse" onClick={() => window.open("https://mejorconsalud.as.com/7-motivos-ir-al-psicologo/", '_blank')}>More info</button>

                            </div>
                            <div className='card-main card_event col-md-5'>
                            <h3 align="center">October 10th. World Mental Health Day (WHO)</h3>
                             <hr className="hr" />
                            <p>Its objectives are to raise awareness in society about mental disorders, fight against the stigmatization suffered by affected people and promote initiatives that improve care.</p>
                               
                            <button  className="ov-btn-grow-ellipse" onClick={() => window.open("https://www.aquinoscuidamos.org/2021/09/18/guia-autocuidado/#:~:text=Actividades%20como%20cantar%2C%20bailar%2C%20tocar,y%20mejoran%20nuestra%20salud%20mental.", '_blank')}>More info</button> 

                            </div>
                            <div className='card-main card_event col-md-5'>
                            <h3 align="center">Mental health and its importance</h3>
                             <hr className="hr" />
                            <p>TThe WHO defines mental health as "a state of well-being in which each individual develops their potential, can cope with the stresses of life, can work productively and fruitfully, and can contribute something to their community."</p> 
                            <button  className="ov-btn-grow-ellipse" onClick={() => window.open("https://www.who.int/es/news/item/03-06-2022-why-mental-health-is-a-priority-for-action-on-climate-change#:~:text=La%20OMS%20define%20la%20salud,aportar%20algo%20a%20su%20comunidad%C2%BB.", '_blank')}>More info</button>                         
                            </div>
                            <div className='card-main card_event col-md-5'>
                            <h3 align="center">Do I need psychological help?</h3>
                             <hr className="hr" />
                            <p>People often tend to think that we have the key to open all doors, including those that are impossible to open.</p>
                            <button  className="ov-btn-grow-ellipse" onClick={() => window.open("https://cenitpsicologia.com/saber-necesito-ayuda-psicologica/", '_blank')}>More info</button>

                            </div>
                    </div>
                </main>
                <div className="sidebar">
                    <h3 align="center">EVENTS</h3>
                    <div className='card-side card_event'>
                        <h3 align="center">IV European meeting on women's mental health</h3>
                         <hr className="hr" />
                        <p>The Catalan Society of Psychiatry and Mental Health organizes the IV European Meeting on Women's Mental Health, Psychosis and Gender, which will be held on March 9 and 10, 2023 in Barcelona.</p>
                        <button  className="ov-btn-grow-ellipse" onClick={() => window.open("https://www.wmhbarcelona.com/", '_blank')}>More info</button>
                    </div>
                    <div className='card-side card_event'>
                        <h3 align="center">Is it more difficult for people with high abilities to find meaning in life?</h3>
                         <hr className="hr" />
                        <p>Next March 7 at 8:00 p.m. (Spanish time), don't miss this event presented by Maribel Rodríguez, director of the Specialization Diploma in Logotherapy and Existential Analysis applied to the UNIR clinic!</p>
                        <button  className="ov-btn-grow-ellipse" onClick={() => window.open("https://www.unir.net/evento/openclass/sentido-de-la-vida-altas-capacidades/?utm_campaign=psiquiatria", '_blank')}>More info</button>
                    </div>
                    <div className='card-side card_event'> 
                        <h3 align="center">FUNDACION QUIRONSALUD</h3>
                         <hr className="hr" />
                        <p>Free content prepared by educational psychologists and adapted to the secondary school curriculum. Co-created with students and scientifically endorsed by health professionals from Quirónsalud.</p>
                        <button  className="ov-btn-grow-ellipse" onClick={() => window.open("https://stayhealthyaulavirtual.es/tematicas-educativas/", '_blank')}>More info</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
// "https://stayhealthyaulavirtual.es/tematicas-educativas/"

export default Psychology;