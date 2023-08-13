import { Prisma } from '@prisma/client';
import { hashPassword } from '../app/helper/password';
import prisma from './dbInstance';

const ROLES: Prisma.RolesCreateInput[] = [
	{
		name: 'ADMIN',
		description: "ADMIN ROLE",
	},
	{
		name: 'USER',
		description: "USER ROLE",
	},
];
const USER: Prisma.UserCreateInput[] | Prisma.UserUncheckedCreateInput[] = [
	{
		name: 'Admin',
		email: 'admin@gmail.com',
		password: hashPassword('123456')
	},
	{
		name: 'user',
		email: 'user@gmail.com',
		password: hashPassword('123456')
	}
];
async function seed() {
	const roles = await prisma.$transaction(ROLES.map(r => prisma.roles.create({ data: r })));
	await prisma.$transaction(USER.map(u =>
		(u.name == 'user') ?
			({ ...u, roleId: roles.find(r => r.name == 'USER')?.id }) : ({ ...u, roleId: roles.find(r => r.name == 'ADMIN')?.id })
	).map(r => prisma.user.create({ data: r })));
}

seed()
	.then(() => {
		console.log('successfully seed');
	})
	.catch((err) => {
		console.log(err.message);
		process.exit(0);
	});
