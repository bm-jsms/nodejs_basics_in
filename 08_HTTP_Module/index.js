import http from 'http';

// Create a server
const server = http.createServer((req, res) => {
	res.end('Hello World');
});
