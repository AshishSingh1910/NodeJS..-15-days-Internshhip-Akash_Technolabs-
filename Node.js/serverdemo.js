var http = require('http');

http.createServer(function(req,res){
    res.end("Hey, Welcome to Node world");
}).listen(3000);
console.log("Server is Started at port 3000")