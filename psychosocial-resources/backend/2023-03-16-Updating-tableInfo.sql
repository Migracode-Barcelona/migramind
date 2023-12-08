create database migramind_a;

drop table if exists tableinfo;

create table tableInfo (
ID SERIAL primary key,
Company VARCHAR(200),
TITLE VARCHAR(200),
DESCRIPTION VARCHAR(1000),
URL_BASIC VARCHAR(80),
SCHEDULE_DESCRIPTION VARCHAR(350),
URL_SCHEDULE VARCHAR(100),
ADDRESS VARCHAR(120),
PROVINCIE VARCHAR(50),
COUNTRY VARCHAR(50),
EMAIL VARCHAR(100),
PHONE VARCHAR(140),
TYPE_OF_COMPANY VARCHAR(100),
attention_schedule varchar(150),
code_photo varchar(500),
latitud float NULL,
longitud float NULL
);

insert into tableInfo (company, title, description, url_basic, schedule_description, url_schedule, address, provincie, country, email, phone, type_of_company, attention_schedule ,code_photo, latitud, longitud) 
values(
'Ajuntament barcelona CAT ',
'Practical information for living in the city of Barcelona',
'Info Barcelona is the website that publishes the news of the Barcelona City Council: the decisions of the municipal Plenary, the actions of the various areas and the most representative initiatives of the ten districts of the city. Practical information for living in the city of Barcelona: news, activities, services, work, transport, business, leisure, maps and innovation.',
'https://ajuntament.barcelona.cat/',
'As important as physical health is mental or psychological health:',
'https://ajuntament.barcelona.cat/joves/es/canal/et-poden-ajudar-i-informar-12',
'Plaça de Comas, 18 Les Corts les Corts',
'Barcelona',
'Spain',
'bigestio@bcn.cat',
'telefon 010 (from outside Barcelona, 931 537 010) and the service "The Ajuntament calls you", Suicide prevention phone: 900 92 55 55',
'Public and Free',
'Monday, Tuesday, Wednesday and Friday from 08:30 a.m. to 2:30 p.m
 Thursday from 08.30 h to 18.30 h',
'https://ajuntament.barcelona.cat/normativagrafica/imatges/Merxandatge-01-RGB.jpg',
41.38570096144183, 
2.129751658428744);

insert into tableInfo (company, title, description, url_basic, schedule_description, url_schedule, address, provincie, country, email, phone, type_of_company, attention_schedule,code_photo,latitud,longitud) 
values(
'Umbral red asistencial "psi"',
'Asistance network, made up of psychoanalysts, clinical psychologists, psychiatrists and collaborators from other areas to work on current malaise both in culture and individually.',
'UMBRAL is constituted as an assistance network, made up of psychoanalysts, clinical psychologists, psychiatrists and collaborators from other areas to work on the current malaise both in culture and individually. UMBRAL proposes itself as a supportive and non-profit network, which offers treatments with accessible fees to people or institutions that request their services. This network circuit puts those who need it in contact with the right professional, allowing demands not to go unattended for economic reasons. Anguish, loneliness, maladjustment, conflicts with others, dependencies, helplessness, lack of love, violence, difficulties with knowing and knowing how to do are some of the painful problems that every subject faces at various moments of a life without power of resolution, and it is there where a professional who knows how to listen to this mental suffering can intervene to propose a cure.',
'https://www.umbral-red.org/',
'Clinical care :',
'https://www.umbral-red.org/es/atencion-clinica.html',
'C/ de Niça, 3, Local, 08024',
'Barcelona',
'Spain',
'coordinacion@umbral-red.org',
'Telephone: 934 33 52 33',
'Private not free',
'fees agreed with the client',
'https://umbral-red.org/images/logo/logo_home.png',
41.41394541548893, 
2.1690573491008216);

insert into tableInfo (company, title, description, url_basic, schedule_description, url_schedule, address, provincie, country, email, phone, type_of_company, attention_schedule ,code_photo,latitud,longitud) 
values(
'Parc Sanitari Sant Joan de Déu PSSJD',
'The General Hospital of Sant Boi and Sant Joan de Déu Mental Health Services',
'Specific mental health care program aimed at the immigrant population who, due to their special vulnerability or need, need to receive specific adaptations of the clinical approach that is usually given in mental health. SATMI offers comprehensive care, in all its dimensions. It tries to go beyond mental health care: care for people, but also accompany them.',
'https://www.pssjd.org/',
'Sant Joan de Déu Health Park has a list of programs framed within the health and social field in order to offer the best care to the people it serves. ',
'https://www.pssjd.org/serveis-assitencials/xarxa-salut-mental/programes',
'Via Laietana, 19, 08003',
'Barcelona',
'Spain',
'ParcSanitari.utjj@sjd.es.',
'TELEPHONE 93 640 63 50',
'Free',
'Tuesday from 16:00 to 18:00 p.m.',
'https://csmc.mafs.cat/wp-content/uploads/2019/05/Parc_Sanitari_Sant_Joan_de_Deu_logo.jpg',
41.38379416769641,
2.1788357547385213);

insert into tableInfo (company, title, description, url_basic, schedule_description, url_schedule, address, provincie, country, email, phone, type_of_company,attention_schedule, code_photo, latitud, longitud) 
values(
'Babel Foundation - Attention to migrants',
'Private, independent, non-profit charity foundation for migrants',
'Reception and psychological support for migrants, asylum seekers and refugees in Barcelona. During the sessions, relational aspects are worked on (family, intercultural relationships, with the work environment, with the host society) and the identification of personal resources to deal with the situation is encouraged from a positive perspective.',
'https://www.babelpuntodeencuentro.org/',
'The Puentes project is intended to offer reception and accompaniment to people who have recently arrived in our society or who at some stage of their lives have experienced a migratory process.',
'https://www.babelpuntodeencuentro.org/proyecto/proyecto-puentes-4/#acceso',
'Carrer dels Salvador 4, 4º, 08001',
'Barcelona',
'Spain',
'info@babelpuntodeencuentro.org gestion@babelpuntodeencuentro.org',
'telephone : +34 93 295 57 93 / +34 629 577 430',
'Free for people without resources. €20 per session for those who can contribute.',
'Monday and Wednesday: 10-14h and 15-19h Tuesday and Thursday: 10-14h and 15-18h Friday: 10-14h',
'https://media.licdn.com/dms/image/C4D0BAQHyKc8Vw1yPbw/company-logo_200_200/0/1601637087258?e=2147483647&v=beta&t=suppI2_LpvhbZM7pZrutgzVrs2RwEt01PC0640bVGHc',
41.380886875202656, 
2.1638073952204273);


insert into tableInfo (company, title, description, url_basic, schedule_description, url_schedule, address, provincie, country, email, phone, type_of_company, attention_schedule,code_photo,latitud,longitud) 
values(
'Sant Pere Claver - Fundació Sanitària SPCSALUT',
'Welcome to the Sant Pere Claver Group, entities with a social commitment.',
'SAPPIR offers comprehensive mental health care (psychiatric, psychological and psychosocial) to non-EU migrants and refugees.',
'https://www.spcsalut.org/',
'Program specialized in attending to the mental health needs of immigrants and refugees as well as in research, evaluation, supervision and teaching in this area. ',
'https://www.spcsalut.org/sm-refugiats.php',
'C. Vila i vilà 16, 08004',
'Barcelona',
'Spain',
'info@spcsalut.org',
'Telephone 934 42 39 03',
'Free',
'Tuesday from 9 a.m. to 7 p.m. Wednesday from 9 a.m. to 2 p.m. Thursday from 9 a.m. to 4 p.m.',
'https://www.spcsalut.org/img/logoFS.png',
41.37310563863906, 
2.1733591393968186);

insert into tableInfo (company, title, description, url_basic, schedule_description, url_schedule, address, provincie, country, email, phone, type_of_company, attention_schedule ,code_photo,latitud,longitud) 
values(
'Association of Systemic Transcultural Psychotherapy Terapias Sin Fronteras',
'Psychological Care for Migrants and People of Foreign Origin, Systemic Transcultural Model Training',
'Association of Transcultural Systemic Psychotherapy. Psychotherapeutic Care for Migrants and people of foreign origin Training in the Transcultural model to be able to evaluate and intervene in psychological problems derived from migration Design and development of Psychosocial Projects',
'https://terapiasinfronteras.com/',
'Do you need an online transcultural psychological therapy?',
'https://terapiasinfronteras.com/terapia-psicologica-online-transcultural/',
'Online ',
'Barcelona',
'Spain',
'info@terapiasinfronteras.com',
'Thelephone :914 299 756 - 653 345 616',
'Free',
'Monday and Tuesday: 4:00 p.m. to 7:00 p.m. Wednesday: 4:00 p.m. to 6:00 p.m. Thursday: 15:00 to 17:00',
'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_172/https://terapiasinfronteras.com/wp-content/uploads/2020/07/lolo-tsfFinal.png',
NULL,
NULL);


insert into tableInfo (company, title, description, url_basic, schedule_description, url_schedule, address, provincie, country, email, phone, type_of_company, attention_schedule ,code_photo,latitud,longitud) 
values(
'Conexus',
'The CONEXUS Psychosocial Care, Training and Research Association',
'The CONEXUS Psychosocial Care, Training and Research Association is made up of psychologists with extensive experience in caring for people in the family, social and health spheres, as well as in training professional teams and in research. The objective of CONEXUS is to improve the well-being and health of people, especially those in situations of difficulty, crisis, violence or inequality. Through psychosocial care for women, men, girls, boys and adolescents, we want to promote the improvement of affective and family relationships, the eradication of violence, and healthy and egalitarian lifestyles. In addition, we carry out training for professionals, companies and institutions on these matters, and we carry out research, both theoretical and applied, to improve intervention and broaden knowledge.',
'https://conexus.cat/',
'Psychotherapy and Programs ',
'https://conexus.cat/atencio/',
'Consell de Cent 419 3r 2a – 08009 ',
'Barcelona',
'Spain',
'info@conexus.cat',
'Telephone : (+34) 93 217 16 46',
'Free',
'From Monday to Friday. from 09:00 to 14:00 and from 15:00 to 20:00',
'https://conexus.cat/wp-content/uploads/2021/10/conexus-logo-header.png',
41.39633048525429, 
2.171945466385684);

insert into tableInfo (company, title, description, url_basic, schedule_description, url_schedule, address, provincie, country, email, phone, type_of_company, attention_schedule ,code_photo,latitud,longitud) 
values(
'Equality ',
'Equality is a non-profit organization, we strongly believe that mental health care should be accessible to all members of society.',
'Equality is a non-profit organization registered in Barcelona, Spain, since September 2022. We strongly believe that mental health care should be accessible to all members of society, which is why we offer free mental health services to individuals and communities facing marginalization and precariousness. Together with our local and international partners, we work with a wide range of individuals and groups, including people with refugee backgrounds, people from LGBTIQ+ communities, people facing mental or physical disabilities, people facing economic hardships, or people facing injustice anywhere. another way.',
'https://iguality.org/',
'What we offer  ',
'https://iguality.org/activities/',
'does not specify',
'Barcelona',
'Spain',
'info@iguality.org',
'WhatsApp +34 633 05 69 40',
'Free',
'does not specift',
'https://iguality.org/wp-content/uploads/2022/08/Logos-wide1-2048x683.png',
null,
null);

insert into tableInfo (company, title, description, url_basic, schedule_description, url_schedule, address, provincie, country, email, phone, type_of_company,attention_schedule , code_photo, latitud, longitud) 
values(
'Associació Exil',
'Asil.cat, a network of organizations in defense of the right to asylum in Catalonia and the rights of people who have suffered forced displacement.',
'Therapeutic medical-psycho-social care for people who have suffered different types of Human Rights violations such as torture, persecution, war, exile or sexist violence. From the EXIL Center, psychological, psychiatric and social monitoring of these people is carried out following an interdisciplinary, comprehensive, systemic and applied therapeutic model through network practices.',
'http://asil.cat/',
'ASSOCIATION The EXIL Association is the Asil.cat Network’s member organisation that is concerned with offering medical, psychological and social therapy to those that have suffered from distinct types of human rights violations including torture, persecution, war, forced exile or gender violence. ',
'http://asil.cat/serveis/medic-psico-social/',
'Avda. República Argentina 6, 4º 2ª 08023 ',
'Barcelona',
'Spain',
'acathi@acathi.org',
'Telephone: 910 474 444',
'Free',
'Monday to Friday',
'http://asil.cat/wp-content/uploads/2015/06/asil-cat-logo.png',
41.407574731254144,
2.1485664528921062);

select * from tableinfo 