let count = 0;
let sum = 0;
for (let i = 1; i <= 727; i++) {
	if (727 % i === 0) {
		console.log(i);
		count++;
		sum += i;
	}
}
console.log(count, sum);