const express = require('express')
const Viatura = require('../models/Viatura')
const router = express.Router()
const { sequelize } = require('../models/Db')
const controller = require('../controller/controller')

router.get('/viatura', function(req, res, next){
    res.render('viatura');
} );


//sequelize.query("SELECT * FROM `viatura`", { type: sequelize.QueryTypes.SELECT})
  //.then(function(viatura) {
    // We don't need spread here, since only the results will be returned for select queries
    //console.log(viatura)
    //res.render('lista_viatura', {viatura:viatura})
  //})
  //router.get('/', (req, res)=> {
    //sequelize.query('SELECT * FROM viatura', (error,results) => {
      //if(error){
      //  throw error;
      //} else{
     //   res.render('lista_viatura', { results:"esta tudo"})
     // }

    
   // });
//});

router.post('/api/viatura', controller.create)
module.exports = router;