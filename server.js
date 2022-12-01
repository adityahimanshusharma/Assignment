// This file will be for deploying server.

// Using Express
var express = require('express');
const Database = require('./Database');

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
    console.log(req.body);
    // Call CSV update function
    Database.ammend_csv(req.body.Epoch, req.body.Value, Date(req.body.Epoch));
    res.send('Data Recieved on Server\t=> ' + Date(Date.now()));
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