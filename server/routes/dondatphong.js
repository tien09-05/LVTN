const express = require("express");
const controllerDonDatPhong = require("../controllers/dondatphong");
const router = express.Router();

router
    .route("/")
    .get(controllerDonDatPhong.getAllDonDatPhong)
    .post(controllerDonDatPhong.postDonDatPhong);

router
    .route("/:id")
    .get(controllerDonDatPhong.getDonDatPhong)
    .put(controllerDonDatPhong.updateDonDatPhong)
    .delete(controllerDonDatPhong.deleteDonDatPhong);

module.exports = router;
