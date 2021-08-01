const express = require("express");
const controllerVoucher = require("../controllers/voucher");
const router = express.Router();

router
    .route("/")
    .get(controllerVoucher.getAllVoucher)
    .post(controllerVoucher.postVoucher);

router
    .route("/:id")
    .get(controllerVoucher.getVoucher)
    .put(controllerVoucher.updateVoucher)
    .delete(controllerVoucher.deleteVoucher);

module.exports = router;
