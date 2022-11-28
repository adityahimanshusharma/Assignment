// Database will be delt here

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './db.csv',
    header: [
        {id: 'epoch_time', title: 'EPOCH'},
        {id: 'value', title: 'DATA'}
    ]
});

module.exports = {
    ammend_csv: (column1_data, column2_data) => {
        // Check if the db.csv file is present. if not then create it.
        var records = [
            { epoch_time: column1_data, value: column2_data }
        ];
        // if yes, Write the values to col1 & col2 in the csv file

        csvWriter.writeRecords(records)       // returns a promise
        .then(() => {
            console.log('Done writing in csv!');
        });
    }
}