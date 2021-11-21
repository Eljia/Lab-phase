const express = require("express");
const productrouter = express.Router();
const isAuth = require("../middlewares/passport");
const validation = require("../middlewares/validation");
const {
  ajoutProduct,
  upload,
  getAllProduct,
  getProductById,
} = require("../controllers/productcontrollers");
/**
 * @param POST /ajout
 * @description ajoute une annonce
 * @access PRIVATE
 */
productrouter.post("/add", upload.single("pic"), isAuth(), ajoutProduct);

productrouter.get("/all", isAuth(), getAllProduct);

productrouter.get("/myProduct", isAuth(), getProductById);

module.exports = productrouter;
