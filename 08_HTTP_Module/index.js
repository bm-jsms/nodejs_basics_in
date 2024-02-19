import http from 'http';

// Create a server
const server = http.createServer((req, res) => {
	/* res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
	res.statusMessage = 'Not Found'; */

	res.write('<h1>Hello Nodejs</h1>');

	res.writeHead(200, 'OK', {
		'Content-Type': 'text/html',
	});
});

// Listen on port 8000
server.listen(8000, () => {
	console.log('Server is listening on port 8000');
});
