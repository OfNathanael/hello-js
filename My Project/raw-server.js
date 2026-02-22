//raw server.js (No npm needed)
const http = require('http'); // Import the built-in http module

// Create an HTTP server
const server = http.createServer((req, res) => {
  //req: Incoming request object
  //res: Response object to send back to the client

  if (req.method === 'GET' && req.url === '/') { // Check if the request is a GET request to the / URL
    //Manual route check for the root URL
    res.writeHead(200, { 'Content-type': 'text/plain' }); // Set the response header with status code and content type
    res.end("Hello! I'm Nathanael, welcome to my server!"); // Send the response body and end the response
  }
  else {
    res.writeHead(404, { 'Content-type': 'text/plain' }); // Set the response header for a 404 Not Found
    res.end('404 Not Found'); // Send the response body and end the response
  }
});
// Start the server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log a message when the server starts
});
