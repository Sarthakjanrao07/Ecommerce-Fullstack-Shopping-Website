const express = require("express");

const {
  addFeatureImage,
  getFeatureImages,
  deleteFeatureImageController
} = require("../../controllers/common/feature-controller");

const router = express.Router();

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImages);
router.delete("/delete/:id", deleteFeatureImageController);


module.exports = router;
