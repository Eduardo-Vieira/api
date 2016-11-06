var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ionic' });
});

/* GET rest Usuário. */
router.get('/usuario', function(req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	
  req.getConnection(function(err,connection){
		 
  		 var sql = 'SELECT * FROM USUARIO';
  		 
		 connection.query(sql,[],function(err,result){
		 if(err) return res.status(400).json(err);

		 return res.status(200).json(result);

		 });
		});
});

module.exports = router;
