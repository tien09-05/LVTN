const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoucherSchema = new Schema(
    {
        tenVoucher: { type: String, require: true },
        moTa: { type: String, require: true },
        giaTri: { type: Number, require: true },
        giaBan: { type: Number, require: true },
        hinhAnh: { type: String, require: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Voucher", VoucherSchema);
