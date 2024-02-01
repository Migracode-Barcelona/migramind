import React, { useState, useEffect } from 'react';
import './Home.css'
import Institutions from '../../components/institutions.json';
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackToTop(scrollPosition > 200); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


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
                  <img src={institution.LOGO} alt='logo' width="250px"></img>
                  <h2  dir='ltr'>{t(institution.Company)}</h2>
                  <p>{t(institution.DESCRIPTION)}</p>
                  <p>Cost: {institution.COST}</p>
                  <p>Languages: {institution.LANGUAGES}</p>
                  <p></p>
                  <p>{t("phone")}: <span dir="ltr">{institution.PHONE}</span></p>
                  <p>{t("email")}: {institution.EMAIL}</p>
                  <div className='getInfo'><a href={institution.URL_BASIC} target="_blank" rel="noopener noreferrer" className="card-link">{t("getInfo")}</a></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          ^
        </button>
      )}
    </div>

  );
};
export default Home;