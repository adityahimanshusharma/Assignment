const axios = require("axios");
const url = 'http://localhost:5000';

// Update data here

for (let i = 0; i < 50; i++)
{
    // var epoch = Math.floor(new Date().getTime() / 1000);
    var data = {
        "Epoch": Math.floor(new Date().getTime() / 1000),
        "Value": i
    }
    axios({
        method: 'post',
        url: url,
        data: data
    })
        .then(data => console.log(data))
        .catch(err => console.log(err));
}
