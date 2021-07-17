const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NhanVienSchema = new Schema(
    {
        tenNhanVien: { type: String, require: true },
        ngaySinh: { type: String, require: true },
        gioiTinh: { type: String, require: true },
        matKhau: { type: String, require: true },
        email: { type: String, require: true },
        soDienThoai: { type: Number, require: true },
        chucvu: { type: String, require: true, default: "Nhân Viên" },
        chinhanh: { type: Schema.Types.ObjectId, ref: "ChiNhanh" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("NhanVien", NhanVienSchema);
