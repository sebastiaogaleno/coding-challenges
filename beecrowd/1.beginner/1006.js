const input = require('fs').readFileSync('../stdin', 'utf8');
const lines = input.split('\n').map(input => parseFloat(input));

const [a, b, c] = lines;
const media = (a*2 + b*3 + c*5)/10;

console.log(`MEDIA = ${media.toFixed(1)}`);