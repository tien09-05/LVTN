const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KhachHangSchema = new Schema(
    {
        tenKhachHang: { type: String, require: true },
        matKhau: { type: String, require: true },
        email: { type: String, require: true },
        soDienThoai: { type: Number, require: true },
        gioiTinh: { type: String, require: true, enum: ["Nam", "Nữ"] },
        tongChiTieu: { type: Number, require: true, default: 0 },
        diemTichLuy: { type: Number, require: true, default: 0 },
        loaiKhachHang: {
            type: Schema.Types.ObjectId,
            ref: "LoaiKhachHang",
            default: "61251df49ecb5f00158ec3e7",
        },
        voucher: [
            {
                type: Schema.Types.ObjectId,
                ref: "Voucher",
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("KhachHang", KhachHangSchema);
