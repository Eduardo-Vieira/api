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

  
});

/* POST rest Usuário. */
router.post('/add', function(req, res, next) {
	
  res.header('Content-Type', 'application/x-www-form-urlencoded');
  
  req.getConnection(function(err,connection){
    var sql = 'INSERT INTO USUARIO(`TX_NOME`,`TX_LOGIN`,`TX_SENHA`,`ID_PERMISSAO`,`TX_EMAIL` )VALUES(?,?,?,?,?)';
    var dados = [req.body.tx_nome,req.body.tx_login,req.body.tx_senha,req.body.id_permissao,req.body.tx_email];
     
    connection.query(sql,dados,function(err,result){
     if(err) return res.status(400).json(err);

     return res.status(200).json(result);

     });
    });
  
});

module.exports = router;
