# Revers-proxy for the web
---
## The problem
The problem this code solves is the fact that the HTTP protocol uses only PORT 80. This creates complications when trying to host multible websites on diffrent domains on the same computer/network. You cannot link the domain to a specific port on the network, It only works on PORT 80.

### *The solution*
A solution is to use a proxy server on the network that checks where the traffic is coming from and rerouting to the approptiate server. This project is such a server. It uses ExpressJS to handel the calls and http-proxy to send the calls to other servers.

---
## How to create your own:
You can easily use the same code in this short project to create a proxy server for your own network. This is the server I made for my network and in the code my specific ports and domain names. Specifically these websites are hosted through this reverse proxy:
1. [projectsbp.com](http://www.projectsbp.com)
2. [utomhusservice.se](http://www.utomhusservice.se)
3. [vergetracker.info](http://www.vergetracker.info)
4. [ninja-stick.com](http://www.ninja-stick.com)
---
In order to edit this to work for your own servers change this object at the top of app.js:
```sh
var locations= {
	projectsbp: 'http://localhost:3000',
	utomhusservice: 'http://localhost:4000',
	vergetracker: 'http://localhost:5000',
	ninja : 'http://localhost:7000'
}
```
I should include the paths and ports of your servers, you can have more or less than 4 of them. You need to make the name of each path a defining part of each domain, if you have a lot of domains that are simular you will have to make the name more specific. In my case they are pretty unique so I only use parts of each host

---
# Disclaimer
Often times the term "Revers proxy" is used to describe a server that lets a you pull data from several servers at the same time for faster responses. **This is not that kind of server**. Each call is sent to only one other server. This server simply allows you to access multible servers on the same network through diffrent domains.

---
## Errors
The server throws a couple of errors of which I am aware of but have not looked into in to much detail as no crashes occur and the program works. I will take a closer look at this in the future.
