// Database will be delt here

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const database_file = './Buffering.csv';

const csvWriter = createCsvWriter({
    path: database_file,
    header: [
        { id: 'epoch_time', title: 'EPOCH' },
        { id: 'Time', title: 'TIME' },
        { id: 'value', title: 'DATA' }
    ],
    append: true,
});

module.exports = {
    ammend_csv: (column1_data, column2_data, column3_data) => {
        // Check if the db.csv file is present. if not then create it.
        var records = [
            { epoch_time: column1_data, value: column2_data, Time: column3_data }
        ];
        // if yes, Write the values to col1 & col2 in the csv file

        csvWriter.writeRecords(records)       // returns a promise
            .then(() => {
                // console.log('Done writing in ' + database_file);
            });
    }
}