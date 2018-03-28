const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

//Below are all the paths and ports to the diffrent servers that the calls should be rerouted to
var projectsbp = 'http://localhost:3000',
    utomhusservice = 'http://localhost:4000',
    vergetracker = 'http://localhost:5000';
	ninja = 'http://localhost:7000';

//Here all types of calls (GET , POST etc)	get handled
app.all("/*", function(req, res) {
	var host = req.get('host');
	//The below if and ifElse statements check if the host/domain include the name of the specific server.
    if(host.indexOf("projectsbp") != -1){
		//If the hostname includes the name it should, the call gets rerouted to the server path specified above
		apiProxy.web(req, res, {target: projectsbp});
	}else if(host.indexOf("utomhusservice") != -1){
		apiProxy.web(req, res, {target: utomhusservice});
	}else if(host.indexOf("vergetracker") != -1){
		apiProxy.web(req, res, {target: vergetracker});
	}else if(host.indexOf("ninja") != -1){
		apiProxy.web(req, res, {target: ninja});
	}
	//This can be scaled to include more servers by simply adding another ifElse here.
});

app.listen(80);
console.log("Reverse proxy now running, Port 80")