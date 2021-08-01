const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HoaDonSchema = new Schema(
    {
        dondatphong: { type: Schema.Types.ObjectId, ref: "DonDatPhong" },
        nhanvien: { type: Schema.Types.ObjectId, ref: "NhanVien" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("HoaDon", HoaDonSchema);
