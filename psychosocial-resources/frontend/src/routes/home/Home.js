import Migramind from '../../img/MigraMind.png';
import './Home.css'
import Header from '../../components/Header';
import Institutions from '../../components/institutions.json';
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();

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
          <p> {t("heroMsg")} </p>
        </div>



        <div className="cards">
          {
            Institutions.map(institution => (

              <div key={institution.ID} className="card">
                <div className="card-content">
                  <h2>{t(institution.Company)}</h2>
                  <p>{t(institution.DESCRIPTION)}</p>
                  <p>{t(institution.PHONE)}</p>
                  <p>{t(institution.EMAIL)}</p>
                  <a href={institution.URL_BASIC} target="_blank" rel="noopener noreferrer" className="card-link">{t("getInfo")}</a>
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