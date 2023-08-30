const input = require('fs').readFileSync('../stdin', 'utf8');
const lines = input.split('\n').map(input => parseFloat(input));

const [a, b] = lines;
const media = (a*3.5+b*7.5)/11;

console.log(`MEDIA = ${media.toFixed(5)}`);