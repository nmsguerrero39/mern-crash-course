import express from "express";
import {
  deleteProduct,
  getProducts,
  postProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
