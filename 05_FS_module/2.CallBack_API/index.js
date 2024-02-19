import * as fs from 'fs';

fs.mkdir('./05_FS_module/2.CallBack_API/newFolder', (err) => {
	if (err) {
		console.error('Error:', err);
		return;
	}
	console.log('Folder created');
});
