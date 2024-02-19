import { URL } from 'url';

const myURL = new URL('https://example.org/p/a/t/h?query=string#hash');
console.log(myURL);
console.log(myURL.href);
console.log(myURL.origin);
console.log(myURL.protocol);
console.log(myURL.hash);
