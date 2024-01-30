import Migramind from '../../img/MigraMind.png';
import './Home.css'
import Institutions from '../../components/institutions.json';
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();

  return (
    <div >
      
      <div className="container-home">

        <div className='about'>
          <p> {t("heroMsg")} </p>
        </div>

        <div className="cards">
          {
            Institutions.map(institution => (

              <div key={institution.ID} className="card">
                <div className="card-content">
                  <h2  dir='ltr'>{t(institution.Company)}</h2>
                  <p>{t(institution.DESCRIPTION)}</p>
                  <p>{t("phone")}: <span dir="ltr">{institution.PHONE}</span></p>
                  <p>{t("email")}: {institution.EMAIL}</p>
                  <div className='getInfo'><a href={institution.URL_BASIC} target="_blank" rel="noopener noreferrer" className="card-link">{t("getInfo")}</a></div>
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