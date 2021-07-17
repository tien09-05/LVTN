const express = require("express");
const controllerLoaiKhachHang = require("../controllers/loaikhachhang");
const router = express.Router();

router
    .route("/")
    .get(controllerLoaiKhachHang.getAllLoaiKhachHang)
    .post(controllerLoaiKhachHang.postLoaiKhachHang);

router
    .route("/:id")
    .get(controllerLoaiKhachHang.getLoaiKhachHang)
    .put(controllerLoaiKhachHang.updateLoaiKhachHang)
    .delete(controllerLoaiKhachHang.deleteLoaiKhachHang);

module.exports = router;
