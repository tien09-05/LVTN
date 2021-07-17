const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BaiDanhGiaSchema = new Schema(
    {
        khachhang: { type: Schema.Types.ObjectId, ref: "KhachHang" },
        phong: { type: Schema.Types.ObjectId, ref: "Phong" },
        noiDung: { type: String, require: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("BaiDanhGia", BaiDanhGiaSchema);
