const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n').map(input => parseFloat(input));

const pi = 3.14159;
const area = pi * lines[0] * lines[0];

console.log(`A=${area.toFixed(4)}`);