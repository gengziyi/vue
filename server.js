const express = require("express");
const url = require("url");
const static = require("express-static");
const server = express();

server.get("/test",(request,response)=>{
	response.end("success!!!")
})



server.listen(83);
server.use(static(`${__dirname}/html`))