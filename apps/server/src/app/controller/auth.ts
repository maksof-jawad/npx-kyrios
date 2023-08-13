import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export default class AuthController {
	prisma: PrismaClient | null = null;
	constructor(prisma: PrismaClient) { this.prisma = prisma; }
	signIn() {
		return async (req: Request, res: Response, next: NextFunction) => {
			console.log('test?')
			res.send('testing');
		}
	}
}