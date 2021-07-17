const express = require('express')
const controllerChiNhanh = require('../controllers/chinhanh')
const router = express.Router()

router.route('/')
    .get(controllerChiNhanh.getAllChiNhanh)
    .post(controllerChiNhanh.postChiNhanh)

router.route('/:id')
    .get(controllerChiNhanh.getChiNhanh)
    .put(controllerChiNhanh.updateChiNhanh)
    .delete(controllerChiNhanh.deleteChiNhanh)

module.exports = router