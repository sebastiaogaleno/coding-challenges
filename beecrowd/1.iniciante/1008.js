const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const workerNumber = parseInt(lines[0]);
const workedHours = parseInt(lines[1]);
const pricePerHour = parseFloat(lines[2]);

const salary = workedHours * pricePerHour;

console.log(`NUMBER = ${workerNumber}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`);