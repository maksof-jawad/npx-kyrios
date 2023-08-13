import * as bcrypt from 'bcrypt';
const saltRounds = bcrypt.genSaltSync(10);

export function hashPassword(password) {
	if (!password) {
		const error = TypeError(`Password must not be empty!`);
		throw error;
	}

	return bcrypt.hashSync(password, saltRounds);
}

export function matchPassword(
	plainPassword: string,
	hashedPassword: string
) {
	if (!plainPassword || !hashedPassword) {
		const error = TypeError('Password/Hash Should Not Be Empty');
		throw error;
	}

	return bcrypt.compareSync(plainPassword, hashedPassword);
}
