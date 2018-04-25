const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

//Below are all the paths and ports to the diffrent servers that the calls should be rerouted to
var locations= {
	projectsbp: 'http://localhost:3000',
	utomhusservice: 'http://localhost:4000',
	vergetracker: 'http://localhost:5000',
	ninja : 'http://localhost:7000'
}

  //Here all types of calls (GET , POST etc)	get handled
  app.all("/*", function(req, res) {
  	var host = req.get('host');
    //Goes through all available hosts
    for(key in locations){
      //if host corresponds with a defining part of the name, the call gets forwarded to that server
      if(host.indexOf(key) != -1){
        apiProxy.web(req, res, {target: locations[key]});
      }
    }
  });

app.listen(80);
console.log("Reverse proxy now running, Port 80")
