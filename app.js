const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const projectsbp = 'http://localhost:3000',
    utomhusservice = 'http://localhost:4000',
    vergetracker = 'http://localhost:5000';
	ninja = 'http://localhost:7000';
 
app.all("/*", function(req, res) {
	var host = req.get('host');
    if(host.indexOf("projectsbp") != -1){
		apiProxy.web(req, res, {target: projectsbp});
	}else if(host.indexOf("utomhusservice") != -1){
		apiProxy.web(req, res, {target: utomhusservice});
	}else if(host.indexOf("vergetracker") != -1){
		apiProxy.web(req, res, {target: vergetracker});
	}else if(host.indexOf("ninja") != -1){
		apiProxy.web(req, res, {target: ninja});
	}
});

app.listen(80);
console.log("Reverse proxy now running, Port 80")