import { Router } from "express";
import { CheekoutController } from "../controllers/cheekout";

export const cheekoutRouter = Router();
const cheekoutController = new CheekoutController();

cheekoutRouter.post("/", cheekoutController.createCheekout);
cheekoutRouter.get("/", cheekoutController.getCheekout);
cheekoutRouter.get("/:id", cheekoutController.getCheekoutById);
cheekoutRouter.delete("/:id", cheekoutController.deleteCheekout);
cheekoutRouter.get("/name/:name", cheekoutController.getCheekoutByName);
cheekoutRouter.put("/:id", cheekoutController.updateCheekoutById);
