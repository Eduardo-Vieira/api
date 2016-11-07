var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ionic' });
});

/* GET rest Usuário. */
router.get('/usuario', function(req, res, next) {
  	
  req.getConnection(function(err,connection){
		 
  		 var sql = 'SELECT * FROM USUARIO';

		 connection.query(sql,[],function(err,result){
		 if(err) return res.status(400).json(err);

		 return res.status(200).json(result);

		 });
		});

  res.end();

});

/* POST rest Usuário. */
router.post('/add', function(req, res, next) {
	
  console.log(req.body);

  res.end();
  
});

module.exports = router;
