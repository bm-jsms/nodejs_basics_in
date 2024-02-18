const greet = require('./greet'); // This is the only thing that is returned from the module
const { person1, person2, person3 } = require('./peoples'); // We can access these variables from another file

greet(person1); // Hello Daniel
greet(person2); // Hello John
greet(person3); // Hello David
