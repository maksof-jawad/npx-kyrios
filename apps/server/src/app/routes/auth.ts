import { Router } from "express";
import errorHandler from "../helper/errorHandler";
import AuthController from "../controller/auth";
import prisma from '../../database/dbInstance';

const router: Router = Router();
const auth = new  AuthController(prisma);

// routes
router.get("/health",errorHandler(auth.signIn()));

export default router;