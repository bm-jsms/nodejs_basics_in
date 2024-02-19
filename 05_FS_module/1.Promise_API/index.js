import * as fs from 'fs/promises';

// create directory / folder
try {
	await fs.mkdir('./05_FS_module/1.Promise_API/newFolder');
	console.log('Folder created');
} catch (err) {
	console.error('Error:', err);
}
