const http = require('http');
const api = require('./api');

const server = http.createServer(async (req, res) => {
  api(req, res, function () {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Invalid route' }));
  });
});

server.listen(5000, () => console.log(`Server running on port 5000...`));
