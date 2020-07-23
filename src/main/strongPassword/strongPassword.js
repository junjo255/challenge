let strongPassword = (n, password) => {
	const checkDigit = item => !isNaN(item);
	const checkLowercase = item => /^[a-zA-Z]+$/.test(item) && item === item.toLowerCase();
	const checkUppercase = item => /^[a-zA-Z]+$/.test(item) && item === item.toUpperCase();
	const checkSpecial = item => /[!@#$%^&*()+-]/g.test(item);
	const checker = [checkDigit, checkLowercase, checkUppercase, checkSpecial];
	let missingCharacters = 6 - password.length;

	for(let i = 0; i < password.length; i++) {
		if(checker.length === 0) {
			break;
		} 
		for(let j = 0; j < checker.length; j++) {
			if(checker[j](password[i])) {
				checker.splice(j, 1);
				j--;
			}
		}
	}
	if(password.length >= 6) return checker.length;
	return checker.length <= missingCharacters ? missingCharacters : checker.length - missingCharacters + missingCharacters;
}
