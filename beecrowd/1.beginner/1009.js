const input = require('fs').readFileSync('../stdin', 'utf8');
const lines = input.split('\n');

const salary = parseFloat(lines[1]);
const sales = parseFloat(lines[2]);

const total = salary + (sales * 0.15);

console.log(`TOTAL = R$ ${total.toFixed(2)}`);