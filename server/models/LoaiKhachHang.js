const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoaiKhachHangSchema = new Schema({
    tenLoai: { type: String, require: true },
    loai: { type: Number, require: true },
    dieuKien: { type: Number, require: true },
    quyenLoi: {
        giamGia: { type: Number, require: true },
        tichDiem: { type: Number, require: true },
    },
});

module.exports = mongoose.model("LoaiKhachHang", LoaiKhachHangSchema);
