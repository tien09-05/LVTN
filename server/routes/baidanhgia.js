const express = require('express')
const controllerBaiDanhGia = require('../controllers/baidanhgia')
const router = express.Router()

router.route('/')
    .get(controllerBaiDanhGia.getAllBaiDanhGia)
    .post(controllerBaiDanhGia.postBaiDanhGia)

router.route('/:id')
    .get(controllerBaiDanhGia.getBaiDanhGia)
    .put(controllerBaiDanhGia.updateBaiDanhGia)
    .delete(controllerBaiDanhGia.deleteBaiDanhGia)

module.exports = router