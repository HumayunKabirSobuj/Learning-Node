
const fs = require('fs');
fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    // console.log(data);
    fs.writeFile('./texts/writeasync.txt', data, (err) => {
        if (err) throw err;
        console.log('Saved!');
    })
}); 