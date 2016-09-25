var express = require('express');
var _ = require('lodash');
var Sequelize = require('sequelize');
var app = express();

 app.get('/',function(req,res){
   res.send('Hello World');
 });

app.get('/time',function(req,res){
  var time = new Date();
  res.send(time);
});


app.get('/neha',function(req,res){
  var neha = {
    name:"neha",
    gender:"F",
    friends:["vijay","pavan","ramya"],
    married:true,
    sick:true,
    getMood : function(){return "happy";}
  };
  res.send(neha);

});

app.get('/movies',function(req,res){
  var sequelize = new Sequelize('movies', 'neha', 'vijay123', {
    host: 'localhost',
    dialect: 'mssql',
   dialectOptions: {
    instanceName :'sameeri'
  }}
);
  sequelize.query("SELECT * FROM movies", { type: sequelize.QueryTypes.SELECT})
  .then(function(movies) {
    // We don't need spread here, since only the results will be returned for select queries
    var filtered = _.filter(movies, function(movie){
      return movie.Rating >=3;
    });
    res.send(filtered);
  });

});


 app.listen(6010,function(){
   console.log('example app listening on port 3000 ');
 });
