// we pushed our code to branch 'dev_one' and have not yet merged them with main branch

/* 
    //  example 1 
import http from 'node:http';

 const server = http.createServer((req, res) => {

      // Set the response status and headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

        // Send the body response
    res.end('Hello, world!\n');

 });

 server.listen(3000, () => {
    console.log('server is running at http://localhost:3000/')
 });
 */
/* 
import http from "http";
    const port = "3000";
    const hostname = "127.0.0.1"; 
    
    // Create an HTTP server
    const server = http.createServer((req, res) => {
            // Set response headers
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

            // Send response
        res.end("Hello, World!\n");
    });

        // Listen on port 3000
    server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });
 */

//  this code boots up a local web server that listens for incoming web requests
// and responds differently based on the URL path
/* 
    import http from "http";
    import url from 'url';

        const port = "3000";
        const hostname = "127.0.0.1"; 
        
        // Create an HTTP server
        const server = http.createServer((req, res) => {

            // This line of Node.js code takes the raw URL from an incoming HTTP request (req.url)
            // and breaks it down into an easy-to-use JavaScript object.
            const parsedUrl = url.parse(req.url, true);
            

            switch(parsedUrl.pathname){
                case '/': 
                    res.setHeader('Content-type', 'text/plain');  // 
                    res.end('Hello, World!\n');  // send response
                    break;
                case '/home': 
                    res.setHeader('Content-type', 'application/json') ;
                    res.end((JSON.stringify({message: 'hello there from home-page'})));
                    break;
                case '/user':
                    res.setHeader('Content-type', 'application/json');
                    res.end(JSON.stringify({name: 'John', age: 45}));
                    break;
                default: 
                    res.statusCode = 404;  //specify status code
                    res.end(JSON.stringify({error: '404 not found'}));
                    break; 
            }
        });      

            // Listen on port 3000
        server.listen(port, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
  */

// Implemented using WHATWG URL API and used nodemon
// this code boots up a local web server that listens for incoming web requests
// and responds differently based on the URL path

/*
import http from "http";

        const port = "3000";
        const hostname = "127.0.0.1"; 
        
        // Create an HTTP server
        const server = http.createServer((req, res) => {

             // Construct a base URL using the request headers or fallback hostname
            const baseUrl = `http://${req.headers.host || hostname + ':' + port}`;

            // Parse the URL using the global WHATWG URL constructor
            const parsedUrl = new URL(req.url, baseUrl);
            

            switch(parsedUrl.pathname){
                case '/': 
                    res.setHeader('Content-type', 'text/plain');  // 
                    res.end('Hello, Josh! \n This is a new comment monitored by nodemon');  // send response
                    break;
                case '/home': 
                    res.setHeader('Content-type', 'application/json') ;
                    res.end((JSON.stringify({message: 'hello there from home-page'})));
                    break;
                case '/user':
                    res.setHeader('Content-type', 'application/json');
                    res.end(JSON.stringify({name: 'John', age: 45}));
                    break;
                default: 
                    res.statusCode = 404;  //specify status code
                    res.end(JSON.stringify({error: '404 not found'}));
                    break; 
            }
            console.log('we are using nodemon');
});      

            // Listen on port 3000
        server.listen(port, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });

*/



//  Serving Pages per URL (app.js)
/* 
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const port = "3000";
const hostname = "127.0.0.1";

//since we do not have __dirname and __filename in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create server
const server = http.createServer((req, res) => {
  if (req.url === "/user") {

        // Define some dynamic data as if we were using a database connection
            const userData = { username: "Samuel-Jackson", email: "SamuelJackson@example.com" };

        // Read the HTML file
            const filePath = path.join(__dirname,".." ,"public", "user.html");
        fs.readFile(filePath, "utf8", (err, html) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "text/plain");
                res.end("Server Error");
                return;
                }

                // Replace placeholders with actual data
                let renderedHtml = html.replace("{{username}}", userData.username);
                renderedHtml = renderedHtml.replace("{{email}}", userData.email);    // here renderedHtml is re-assigned, the second line takes the changes made in the first line and builds right on top of them, while completely overwriting the old value inside our variable "box.
                // Send the modified HTML file
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end(renderedHtml);
        });
  } else {
        // Handle other routes or serve static files
        res.statusCode = 404;
        res.end("Resource Not Found, Client Side Error");
    }
});

// To test this, put /user at the back of the default address you get when you first run your server 

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 */