const router = require("express").Router();
const WishListRoutes = require("./wishlist");
const ProductRoutes = require("./products");
const ShopRoutes = require("./shops");

router.use("/wishlist", WishListRoutes);
router.use("/products", ProductRoutes);
// router.use("/user", UserRoutes);
// router.use("/category", CategoryRoutes);
router.use("/shops", ShopRoutes);

module.exports = router;