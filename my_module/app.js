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
