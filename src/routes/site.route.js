import express from "express";
const router = express.Router();
import siteController from "../controllers/SiteController.js";

router.get("/", siteController.index);
router.get("/search", siteController.search);

export default router;
