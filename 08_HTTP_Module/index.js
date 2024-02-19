import http from 'http';

// Create a server
const server = http.createServer((req, res) => {
	res.end('Hello World');
});

// Listen on port 8000
server.listen(8000, () => {
	console.log('Server is listening on port 8000');
});
