import express from "express";
import { getAllProducts, getProduct } from "../controller/productController.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProduct);

export default router;
