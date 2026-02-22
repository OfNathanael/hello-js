require('dotenv').config();

//server.js (Using npm and Express.js)
const express = require('express'); // Import the Express.js module
const app = express(); // Create an instance of the Express application
const PORT = process.env.PORT; // Define the port number for the server to listen on



//JSON parsing middleware
app.use(express.json()); // Use the built-in JSON parsing middleware to parse incoming JSON payloads

//Self-defined middleware
app.use((req, res, next) => { // Define a custom middleware function
    console.log(`Received a "${req.method}" request for "${req.url}" on ${new Date()}`); // Log the HTTP method and URL of the incoming request
    next(); // Call the next middleware function in the stack(this is important to avoid hanging the request)
});

//Another self-defined middleware
app.use((req, res, next) => {
    console.log("This is another middleware function that runs after the first one."); // Log a message to indicate that this middleware is running
    next(); // Call the next middleware function in the stack
});

//Request handler for POST requests to the /echo endpoint
app.post('/echo', (req, res) => {
    //console.log(req.body); // Log the received JSON data to the console
    res.json({echoed: req.body}); // Send a JSON response with the received data
});

//Request handler for GET requests to the /user/:id endpoint
app.get('/user/:id', (req, res) => { // Define a route with a route parameter :id
    const id = req.params.id; // Extract the id parameter from the route
    console.log(`Received a request for user with ID: ${id}`); // Log the captured id to the console
    res.send(`You requested user with ID: ${id}`); // Send a response with the captured id
});

//Request handler for GET requests to the /search endpoint with query parameters
app.get('/search', (req, res) => { // Define a route for the /search endpoint
    const search = req.query.search; // Extract the search query parameter from the URL
    console.log(`Received a search request for the term: ${search}`); // Log the search term from the query parameters
    res.send(`Searching for: ${search}`); // Send a response with the search term
});

//Request handler for GET requests to the root URL
app.get('/', (req, res) => { // Define a route for the root URL
    res.send("Hello! I'm Nathanael, welcome to my server!"); // Send a response when the root URL is accessed
});

//Error-handling middleware
app.use((err, req, res, next) => { // Define an error-handling middleware function
    console.error(err.stack); // Log the error stack trace to the console
    res.status(500).json({error: 'something went wrong!'}); // Send a JSON response with a 500 status code and an error message
});

//Testing error-handling middleware
app.get('/fail', (req, res) => { // Define a route that intentionally throws an error to test the error-handling middleware
    throw new Error('This is a test error!'); // Throw an error to test the error-handling middleware
});

app.listen(PORT, () => { // Start the server and listen on the defined port
    console.log(`Server is now running on http://localhost:${PORT}`); // Log a message when the server starts
});