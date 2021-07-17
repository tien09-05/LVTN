const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonDatPhongSchema = new Schema(
    {
        soNguoiChoi: { type: Number, require: true },
        ngayChoi: { type: String },
        gioChoi: { type: String },
        tienTamTinh: { type: Number, require: true },
        loaiThanhVien: { type: Number, require: true },
        tongTien: { type: Number, require: true },
        khachhang: {
            type: Schema.Types.ObjectId,
            ref: "KhachHang",
            require: true,
        },
        phong: { type: Schema.Types.ObjectId, ref: "Phong", require: true },
        chinhanh: {
            type: Schema.Types.ObjectId,
            ref: "ChiNhanh",
            require: true,
        },
        voucher: {
            type: Schema.Types.ObjectId,
            ref: "Voucher",
        },
        trangThai: {
            type: String,
            require: true,
            default: "Chưa xác nhận",
            enum: ["Chưa xác nhận", "Đã xác nhận", "Hoàn thành"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("DonDatPhong", DonDatPhongSchema);
