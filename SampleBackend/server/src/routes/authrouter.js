import express from "express";
import { Login, Logout, Register } from "../controller/authController.js";

const router = express.Router();

router.post("/register", Register);

router.post("/login", Login);

router.get("/logout", Logout);

router.patch("frgtpass")

export default router;