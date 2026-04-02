import { Router } from "express";
import * as userController from "../controllers/userController.js";

const router = Router();

router.get("", userController.listUsers);

router.get("/:username", userController.listUserUsername);

router.get("/id/:id", userController.listUserID);

router.post("", userController.createUser);

router.patch("/id/:id", userController.updateUser);

router.delete("/id/:id", userController.deleteUser);

export default router;
