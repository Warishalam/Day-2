const fs = require('fs');
const path = require('path');

const directory = './data';

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    let aggregateData = {};

    files.forEach(file => {
        const filePath = path.join(directory, file);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${file}:`, err);
                return;
            }
            // Aggregate data here
            aggregateData[file] = data;
            console.log(`Read data from ${file}`);
            console.log('Aggregated data so far:', aggregateData);
        });
    });
});
