const alf = 'КОТИЛЙ';
const arr = [];
for (let i = 0; i < alf.length; i++) {
	for (let j = 0; j < alf.length; j++) {
		if (j !== i) {
			for (let k = 0; k < alf.length; k++) {
				if (k !== i && k !== j) {
					for (let l = 0; l < alf.length; l++) {
						if (l !== i && l !== j && l !== k) {
							for (let m = 0; m < alf.length; m++) {
								if (m !== i && m !== j && m !== k && m !== l) {
									for (let n = 0; n < alf.length; n++) {
										if (n !== i && n !== j && n !== k && n !== l && n !== m) {
											arr.push(alf[i] + alf[j] + alf[k] + alf[l] + alf[m] + alf[n]);
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
console.log(arr);
let i = 0;
while (i < arr.length && arr[i] !== 'ТЙЛИОК') {
	i++;
}
console.log(i, arr[i]);
console.log(i + 1, arr[i + 1]);
