// var currentTime = new Date(); // Date object created at server start

// function callback (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   console.log(currentTime);
//   res.write("[" + currentTime + "] " + "Pages: " + output[0] + ", Requests: " + output[1]);
//   res.end();
//   console.log('Response written to the web.');
// }

// require('http').createServer(callback).listen(8080);

setInterval(function(){
	console.log("hello")
}, 1000);