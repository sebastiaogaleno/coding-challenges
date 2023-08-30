const input = require('fs').readFileSync('../stdin', 'utf8');
const lines = input.split('\n').map(input => parseInt(input));

const [a, b, c, d] = lines;
const diferenca = a*b - c*d;

console.log(`DIFERENCA = ${diferenca}`);