import express from "express";
const router = express.Router();
import newController from "../controllers/NewsController.js";

router.get("/", newController.index);
router.get("/:slug", newController.detail);

export default router;
