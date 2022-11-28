const axios = require("axios");
const url = 'http://localhost:5000';

// Update data here

for (let i = 0; i < 5; i++) {
    send_data(i);
}


async function send_data(val) {
        var data = {
            "Epoch": Math.floor(new Date().getTime() / 1000),
            "Value": val
        }
    axios({
        method: 'post',
        url: url,
        data: data
    });
    // .then(data => console.log(data))
    // .catch(err => console.log(err));
}