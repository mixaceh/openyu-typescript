/**
 * Created by User on 2018/7/3.
 */

//jquery
var jq = require("jquery")
console.log(jq);

//nodejs
// var http = require("http");
// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("Hello World!");
//     response.end();
// }).listen(8080);
// console.log("Server running at http://localhost:8080/");


//express > error
// var express = require('express');
// var app = module.exports = express

const express = require('express');
const app = express(); //建立一個Express伺服器
app.listen(8080); //告訴server聽取3000這個Port