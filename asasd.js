var express = require('express');
var app = express();
var employeeController=function (req, res) {
  console.log("Employee");
  var employee=[
  {firstName:"Abhishek" ,lastName:"Harne", id:'1'},
  {firstName:"Kedar" ,lastName:"Shinde" ,id:2},
  {firstName:"Rashid" ,lastName:"Khan" ,id:3}
  ];
  res.send(employee);
};

var AdminController = function (req, res){
	Console.log('Admin');
	var admin=[
	{adminName:'Raj' ,adminId:'22' ,location_:'Pune'}
	];
	res.send(admin);
};
app.get('/admin',AdminController );  
app.get('/employee',employeeController );
  var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("http://localhost:", host, port)
})