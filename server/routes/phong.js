const express = require("express");
const controllerPhong = require("../controllers/phong");
const router = express.Router();

router
    .route("/")
    .get(controllerPhong.getAllPhong)
    .post(controllerPhong.postPhong);

router
    .route("/:id")
    .get(controllerPhong.getPhong)
    .put(controllerPhong.updatePhong)
    .delete(controllerPhong.deletePhong);

router.route("/slug/:slug").get(controllerPhong.getPhongBySlug);
module.exports = router;
