import http from 'http';
import fs from 'fs';

const port = 8000;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		fs.readFile('./pages/index.html', (err, data) => {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else if (req.url === '/about') {
		fs.readFile('./pages/about.html', (err, data) => {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else {
		res.end('Invalid Request');
	}
});

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
