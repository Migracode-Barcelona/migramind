import './Home.css'
import Header from '../../components/Header';
import Institutions from '../../components/institutions.json'


const Home = () => {

    return (
          <div >
            <Header />
                <div className="container-home">



                  <div className='about'>
                    <p> Welcome to MigraMind, your source for mental health awareness in Barcelona. We provide information to foster a community that prioritizes emotional well-being. </p>
                  </div>
    
  
    
      <div className="cards">
          {
            Institutions.map(institution => (
              
              <div key={institution.ID} className="card">
                <div className="card-content">
                  <h2>{institution.Company}</h2>
                  <p>{institution.DESCRIPTION}</p>
                  <p>{institution.PHONE}</p>
                  <p>{institution.EMAIL}</p>
                  <a href={institution.URL_BASIC} target="_blank" rel="noopener noreferrer" className="card-link">More Info</a>
                </div>
              </div>
            ))
          }


      </div>
    


    



  
                </div>
          </div>
    );
};
export default Home;