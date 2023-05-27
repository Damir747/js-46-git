let count = 0;
for (let i = 1; i <= 2023; i++) {
	if (i % 14 === 0 && i % 31 === 0) {
		console.log(i);
		count++;
	}
}
console.log(count);