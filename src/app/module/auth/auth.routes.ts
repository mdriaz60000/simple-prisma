import {  Router } from "express";
import { authController } from "./auth.controller";

const router = Router()

router.post("/register", authController.createRegister)

export const authRoutes = router