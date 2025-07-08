import express from "express";
import {
  addToCart,
  deleteCart,
  getCart,
  updateCart,
} from "../controller/cartController.js";

const router = express.Router();

router.route("/").get(getCart).post(addToCart).put(updateCart);

router.route("/:id").delete(deleteCart).put(updateCart);

export default router;
