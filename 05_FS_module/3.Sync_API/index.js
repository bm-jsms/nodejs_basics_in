import * as fs from 'fs';

// Create a Directory
fs.mkdirSync('./05_FS_module/3.Sync_API/newFolder', { recursive: true });

// Remove Directory
fs.rmdirSync('./05_FS_module/3.Sync_API/newFolder', { recursive: true });
