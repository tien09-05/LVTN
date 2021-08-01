const express = require('express')
const controllerHoaDon = require('../controllers/hoadon')
const router = express.Router()

router.route('/')
    .get(controllerHoaDon.getAllHoaDon)
    .post(controllerHoaDon.postHoaDon)

router.route('/:id')
    .get(controllerHoaDon.getHoaDon)
    .put(controllerHoaDon.updateHoaDon)
    .delete(controllerHoaDon.deleteHoaDon)

module.exports = router