
const http = require('http');
const fs = require('fs')
//creating a server using row node js

const server = http.createServer();

//server listener

server.on('request', (req, res) => {
    if (req.url === "/read-file", req.method === "GET");
    //streaming file reading
    const readableStream = fs.createReadStream(__dirname + '/texts/read.txt');
    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer)
    })
    readableStream.on('end', () => {
        res.statusCode = 200;
        res.end('The streaming is over ')
    })

    readableStream.on('error', (error) => {
        console.log(error)
        res.statusCode = 200;
        res.end('Something Went Wrong ! ')
    })
})



// server run

server.listen(5000, () => {
    console.log('server is listening on port 5000')
})