const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChiNhanhSchema = new Schema({
    tenChiNhanh: { type: String, require: true },
    diaChi: { type: String, require: true },
    soDienThoai: { type: Number, require: true },
})

module.exports = mongoose.model('ChiNhanh', ChiNhanhSchema)