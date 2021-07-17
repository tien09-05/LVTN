const express = require("express");
const controllerNhanVien = require("../controllers/nhanVien");
const router = express.Router();

router
    .route("/")
    .get(controllerNhanVien.getAllNhanVien)
    .post(controllerNhanVien.signUpNhanVien);

router.route("/signup").post(controllerNhanVien.signUpNhanVien);
router.route("/login").post(controllerNhanVien.loginNhanVien);

router
    .route("/:id")
    .get(controllerNhanVien.getNhanVien)
    .put(controllerNhanVien.updateNhanVien)
    .delete(controllerNhanVien.deleteNhanVien);

module.exports = router;
