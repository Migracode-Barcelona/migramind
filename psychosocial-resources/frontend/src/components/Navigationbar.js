import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
    dir: "ltr",
  },
  {
    code: "es",
    name: "Castellano",
    country_code: "es",
    dir: "ltr",
  },
  {
    code: "fr",
    name: "French",
    country_code: "fr",
    dir: "ltr"
  },
];

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
  </svg>
)


function Navigationbar() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const refreshPage = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <Container fluid className="color-nav">
      <Row>
        <Col
          xs={8}
          md={10}
          xl={10}
          className="text-center d-flex align-items-center align-self-center"
          fluid
        >
          <h1 className="mx-2 header-app-name">MigraMind</h1>
          {/* <Nav className="d-flex flex-wrap justify-content-end align-self-center">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav> */}
          <div className="nav-tab">
  	 			
  	 			
  	 				<a href="/">{t("home")}</a>
            
  	 				<a href="/blog">{t("blog")}</a>
					   
  	 			
  	 		</div>
        </Col>
        <Col
          xs={4}
          md={2}
          xl={2}
          className="d-flex flex-wrap justify-content-end align-self-center"
          fluid
        >
          <Container className="d-flex justify-content-end px-0">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <GlobeIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {languages.map(({ code, name, country_code }) => (
                  <Dropdown.Item
                    key={country_code}
                    onClick={() => {
                      i18next.changeLanguage(code);
                      refreshPage();
                    }}
                    disabled={code === currentLanguageCode}
                  >
                    {name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Navigationbar;
