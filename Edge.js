const axios = require("axios");
const url = 'http://localhost:5000';

const base = 20.0;

// Update data here
send_data(getRandomArbitrary(base, base + 5));

// To send data over http post request.
async function send_data(val) {
    var data = {
        "Epoch": Math.round(Date.now() / 1000),
        "Value": val
    }
    await axios({
        method: 'post',
        url: url,
        data: data
    })
        .then(data => console.log(data.data))
        .catch(err => console.log(err));
}


// Functions to randomly generate temperature data.
function getRandomArbitrary(min, max) {
    return parseFloat(Math.random() * (max - min) + min).toPrecision(4);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}