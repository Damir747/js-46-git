let count = 0;
for (let i = 1; i <= 9; i++) {
	for (let j = 0; j <= 9; j++) {
		let number = i * 100000 + 2023 * 10 + j;
		if (number % 36 === 0) {
			console.log(number);
			count++;
		}
	}
}
console.log(count);