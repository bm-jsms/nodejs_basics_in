import http from 'http';

const port = 8000;

// Create a server
const server = http.createServer((req, res) => {
	// Routing
	if (req.url === '/') {
		res.write('<h1>Hello Nodejs</h1>');
	} else if (req.url === '/about') {
		res.write('<h1>About Nodejs</h1>');
	} else {
		res.write('<h1>404 Not Found</h1>');
	}

	res.writeHead(200, 'OK', {
		'Content-Type': 'text/html',
	});
});
