import http from 'http';

const port = 8000;

// Create a server
const server = http.createServer((req, res) => {
	// Routing
	if (req.url === '/') {
		res.end('<h1>Home Page</h1>');
	}

	res.writeHead(200, 'OK', {
		'Content-Type': 'text/html',
	});
});

// Listen Server
server.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
