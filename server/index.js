const sequelize = require('./db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const models = require('./models')
const JobApp = models.JobApp;
const app = express(); 
const port = process.env.PORT || 8000;


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


 app.use(cors());

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json()); 

 app.get('/jobapps', async (req, res) => {
    try {
      const jobapps = await JobApp.findAll();
      res.send(jobapps)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  });

  app.get('/jobapps/:id', async (req, res) => {
    try {
      const requestedId = req.params.id;
      const jobapp = await JobApp.findOne({ where: {id: requestedId}})
      res.send(jobapp)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  });

  app.post('/jobapps/create', async (req, res) => {
    try {
      const jobApp = await JobApp.create(req.body)
      res.json({'id': jobApp.id});
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  });

  app.put('/jobapps/edit/:id', async (req, res) => {
    try {
      const requestedId = req.params.id;
      const jobApp = await JobApp.update(req.body, { where: {id: requestedId}})
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  });


  app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  }); 
