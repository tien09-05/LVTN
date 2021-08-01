const express = require("express");
const controllerKhachHang = require("../controllers/khachhang");
const router = express.Router();

router.route("/").get(controllerKhachHang.getAllKhachHang);

router.route("/register").post(controllerKhachHang.registerKhachHang);
router.route("/login").post(controllerKhachHang.loginKhachHang);

router
    .route("/updatepassword")
    .put(controllerKhachHang.updatePasswordKhachHang);

router
    .route("/:id")
    .get(controllerKhachHang.getKhachHang)
    .put(controllerKhachHang.updateKhachHang)
    .delete(controllerKhachHang.deleteKhachHang);

router.route("/:id/addVoucher").post(controllerKhachHang.addVoucher);

module.exports = router;
