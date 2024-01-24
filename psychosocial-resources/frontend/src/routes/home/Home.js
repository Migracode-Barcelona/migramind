import Migramind from '../../img/MigraMind.png';
import './Home.css'
import Header from '../../components/Header';


const Home = () => {

    return (
          <div >
            <Header />
                <div className="container-home">

                  {/* <h1 className='titulo'>WELCOME TO </h1>
                  <div className="migracode">
                    <img src={Migramind}/>
                    <h5>Is an information platform on mental health in Barcelona that allows immigrants and refugees to find out about all the psychological help they can access for free.</h5>
                  </div> */}

                  <div className='about'>
                    <p> Welcome to MigraMind, your source for mental health awareness in Barcelona. We provide information to foster a community that prioritizes emotional well-being. </p>
                  </div>
    
    <div className='cards'>
    <div className="card">
      <div className="card-content">
        
          <h2> Company 1 </h2>
        
        <p className="card-description">
        Info Barcelona is the website that publishes the news of the Barcelona City Council: the decisions of the municipal Plenary, the actions of the various areas and the most representative initiatives of the ten districts of the city. Practical information for living in the city of Barcelona: news, activities, services, work, transport, business, leisure, maps and innovation.
        </p>
        <p>
          Contact information
        </p>

      </div>
    </div>

    <div className="card">
      <div className="card-content">
        
          <h2> Company 2 </h2>
        
        <p className="card-description">
        Info Barcelona is the website that publishes the news of the Barcelona City Council: the decisions of the municipal Plenary, the actions of the various areas and the most representative initiatives of the ten districts of the city. Practical information for living in the city of Barcelona: news, activities, services, work, transport, business, leisure, maps and innovation.
        </p>
        <p>
          Contact information
        </p>

      </div>
    </div>
    
    <div className="card">
      <div className="card-content">
        
          <h2> Company 3 </h2>
        
        <p className="card-description">
        Info Barcelona is the website that publishes the news of the Barcelona City Council: the decisions of the municipal Plenary, the actions of the various areas and the most representative initiatives of the ten districts of the city. Practical information for living in the city of Barcelona: news, activities, services, work, transport, business, leisure, maps and innovation.
        </p>
        <p>
          Contact information
        </p>

      </div>
    </div>


    </div>
                </div>
          </div>
    );
};
export default Home;