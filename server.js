// This file will be for deploying server.

// Using Express
var express = require('express');

// const port = 5000;

const ServerSettings = {
    port: 5000,
}

// Initialise the express instance.
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.clear();

// When the get request is recieved form client side.
app.get('/', (req, res) => {
    res.send('Hello from the Express side!');
});

// post request from client (client published data)
app.post('/', (req, res) => {
    console.log(Date(req.body.Epoch));
    console.log(req.body.Epoch);
    console.log(req.body.Value);

    // Call CSV update function

});

/*
 Open the following port and listen on this continously for incoming
 data.
 */
app.listen(ServerSettings.port, (req, res) => {
    // Notify on console for starting the server.
    console.log('Server Started!');
    console.log("listening on Port \t: " + ServerSettings.port);
}
);