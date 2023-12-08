import Migramind from '../../img/MigraMind.png';
import './Home.css'
import Header from '../../components/Header';


const Home = () => {

    return (
          <div >
            <Header />
                <div className="container-home">
                  <h1 className='titulo'>WELCOME TO</h1>
                  <div className="migracode">
                    <img src={Migramind}/>
                    <h5>Is an information platform on mental health in Barcelona that allows immigrants and refugees to find out about all the psychological help they can access for free.</h5>
                  </div>
                </div>
          </div>
    );
};
export default Home;