const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n').map(input => parseInt(input));

const sum = lines[0]+lines[1];

console.log(`X = ${sum}`);