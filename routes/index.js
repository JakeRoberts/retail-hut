const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const auth = require("./auth")

// API Routes
router.use("/api", apiRoutes);
router.use("/auth", auth);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  
  module.exports = router;