const express = require('express');
const cors = require('cors');
const {Pool} = require('pg');
const bodyParser = require("body-parser");
require("dotenv").config();

const pool = new Pool({
    user: "postgres",
    host: "db.czpzzkcnuidgyfljkuof.supabase.co",
    database: "postgres",
    password: process.env.PG_PASSWORD,
    port: 5432,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());


const getTableInfo = 'select * from tableInfo;'
app.get('/getHelp', function(req, res) {
  
  pool.query(getTableInfo,(error, result) => 
  {
    res.json(result.rows)
  })
})

//function to get just a single event from DB
app.get('/getHelp/:singleEventId', function(req, res) {
const singleEventId = req.params.singleEventId;

  let query = 'select * from tableInfo WHERE id=$1;'
  pool
    .query(query, [singleEventId])
    .then((result)=> res.json(result.rows))
    .catch((e) => console.error(e));
})

//function to search events:
app.get('/searchEvent', async(req, res) => {
  try {

    const { eventQuery } = req.query;

    const searchEvent = await pool.query(
      "SELECT * FROM tableinfo WHERE title || description || company ILIKE $1", 
    [`%${eventQuery}%`]
    );

    res.json(searchEvent.rows);
  } catch (err) {
    console.error(err);
  }
});


//function to add items to table DB
app.post('/getHelp', function(req, res){
  const addObjectToDB = 'insert into tableInfo (company, title, description, url_basic, url_schedule, address, provincie, country, email, phone, type_of_company, attention_schedule) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);'
  let nameCompany = req.body.nameCompany
  console.log(req.body);
  let addTitle = req.body.title
  let addDescription = req.body.description
  let addUrlBasic = req.body.urlBasic
  let addUrlSchedule = req.body.urlSchedule
  let addAddress = req.body.address
  let addProvincie = req.body.provincie
  let addCountry = req.body.country
  let addEmail = req.body.email
  let addPhone = req.body.numberPhone
  let addTypeOfCompany = req.body.type
  let addAttentionSchedule = req.body.attencionSchedule
  let addInfoArray = [nameCompany,addTitle,addDescription,addUrlBasic,addUrlSchedule,addAddress,addProvincie,addCountry,addEmail,addPhone,addTypeOfCompany,addAttentionSchedule]
  pool.query(addObjectToDB, addInfoArray, (error, result) => {
    if (error) {
      console.error(error);
      res.send('error adding information')
    } else {
      res.send('added information')
    }
  })
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5001;
}

app.listen( port, function () {
  console.log("Your app is listening on port " + port);
});