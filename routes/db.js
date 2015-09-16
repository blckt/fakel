var mysql= require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'blckt',
  password : 'sadilo1994'
});



var query="INSERT INTO `fakel`.`User` (`id`, `login`, `psw`, `email`, `avatarlink`, `registerdate`) VALUES (NULL, 'blckt', 'sadilo1994', 'renau94@gmail.com', 'url link', CURRENT_DATE())";
var adduser=function(){ 
  connection.connect(function(err){
  if (err){throw err;}
  else console.log('db connected');
});
  connection.query(query),function(err){
  if (!err) throw err;
  console.log('user added');
  connection.end();
};
}

module.exports.adduser=adduser;