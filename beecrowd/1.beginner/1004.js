const input = require('fs').readFileSync('../stdin', 'utf8');
const lines = input.split('\n').map(input => parseInt(input));

const [a, b] = lines;

console.log(`PROD = ${a*b}`);