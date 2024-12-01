const input = require('fs').readFileSync('../stdin', 'utf8');
const lines = input.split('\n');

const qty1 = parseInt(lines[0].split(' ')[1]);
const price1 = parseFloat(lines[0].split(' ')[2]);

const qty2 = parseInt(lines[1].split(' ')[1]);
const price2 = parseFloat(lines[1].split(' ')[2]);

const total = qty1*price1 + qty2*price2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);