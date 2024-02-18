function greet(name) {
	console.log(`Hello ${name}`);
}

// Tell other files that they can use this function

export default greet; // This is the only thing that is returned from the module
