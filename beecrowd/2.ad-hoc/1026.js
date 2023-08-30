const input = require('fs').readFileSync('../stdin', 'utf8');
const lines = input.split('\n').filter(input => input.trim() !== '');

lines.forEach(line => {
	const [a, b] = line.split(' ').map(number => parseInt(number));
	if (a+b < 4294967295) {
	    console.log(a ^ b);
	} else if (a+b === 4294967295) {
	    console.log(4294967295);
	} else if (a+b > 4294967295) {
	    console.log(0);
	}
});
