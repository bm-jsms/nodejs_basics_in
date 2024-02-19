import * as fs from 'fs/promises';

// create directory / folder
/* try {
	await fs.mkdir('./05_FS_module/1.Promise_API/newFolder');
	console.log('Folder created');
} catch (err) {
	console.error('Error:', err);
} */

// Read the content
/* try {
	const files = await fs.readdir('./05_FS_module/1.Promise_API');
	console.log('Files:', files);
} catch (err) {
	console.error('Error:', err);
} */

// Remove Folder / Directory
/* try {
	await fs.rmdir('./05_FS_module/1.Promise_API/newFolder');
	console.log('Folder removed');
} catch (err) {
	console.error('Error:', err);
} */

// Create and Write to a file
/* try {
	await fs.writeFile('./05_FS_module/1.Promise_API/File.txt', 'Hello World');
	console.log('File created and written');
} catch (err) {
	console.error('Error:', err);
} */

// Read File
/* try {
	const data = await fs.readFile(
		'./05_FS_module/1.Promise_API/File.txt',
		'utf-8',
	);
	console.log('Data:', data);
} catch (err) {
	console.error('Error:', err);
} */

// Append File in the new line
/* try {
	await fs.appendFile(
		'./05_FS_module/1.Promise_API/File.txt',
		'\nI am learning Node.js',
	);
	console.log('Data appended');
} catch (err) {
	console.error('Error:', err);
} */

// Copy File
try {
	await fs.copyFile(
		'./05_FS_module/1.Promise_API/File.txt',
		'./05_FS_module/1.Promise_API/README.md',
	);
	console.log('File copied');
} catch (err) {
	console.error('Error:', err);
}
