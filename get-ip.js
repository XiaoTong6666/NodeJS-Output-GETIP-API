const http = require('http');
http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(ip);
  }
}).listen(100, () => {
  console.log('好了喵~');
});
