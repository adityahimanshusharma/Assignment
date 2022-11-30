const axios = require("axios");
const Local_DB = require('./Buffering_DB')
const url = 'http://localhost:5000';
var Tx_Count = 0;
var Buffering_Count = 0;
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
        .then(data => {
            console.log(data.data);
            Tx_Count++;
        })
        .catch(err => {
            // Call buffering function here.
            console.log('Buffering data here!\t: ' + Date(Date.now()));
            // Make a local file here!
            Local_DB.ammend_csv(data.Epoch, data.Value, Date(data.Epoch));
            Buffering_Count++;
        });
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