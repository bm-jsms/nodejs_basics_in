import path from 'path';

console.log(path.dirname('04_path_module/index.js')); // 04_path_module
console.log(path.extname('04_path_module/index.js')); // .js
console.log(path.join('nodejs', '04_path_module', 'index.js')); // 04_path_module/index.js

// go up one level
console.log(path.join('nodejs', '04_path_module', 'index.js', '..')); // 04_path_module

console.log(path.parse('04_path_module/index.js')); // Info about the path

console.log(path.parse('04_path_module/index.js').name); // index
console.log(path.parse('04_path_module/index.js').base); // index.js
console.log(path.parse('04_path_module/index.js').ext); // .js
console.log(path.parse('04_path_module/index.js').dir); // 04_path_module
console.log(path.parse('04_path_module/index.js').root); // null
