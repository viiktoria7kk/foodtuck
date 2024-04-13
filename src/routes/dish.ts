import { Router } from "express";
import { DishController } from "../controllers/dish";

export const dishRouter = Router();
const dishController = new DishController();

dishRouter.post("/", dishController.createDish);
dishRouter.get("/", dishController.getDish);
dishRouter.get("/:id", dishController.getDishById);
dishRouter.put("/:id", dishController.updateDish);
dishRouter.delete("/:id", dishController.deleteDish);
