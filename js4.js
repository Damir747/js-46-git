for (let x = 1; x < 1000000; x++) {
	for (let y = 1; y < 1000000; y++) {
		if (0.25 * y * y + 8 * y === 16 * x * x - 47) {
			console.log(x, y);
		}
	}
}