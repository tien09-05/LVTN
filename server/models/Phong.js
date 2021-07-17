const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhongSchema = new Schema({
    tenPhong: { type: String, require: true },
    theLoai: { type: String, require: true },
    noiDung: { type: String, require: true },
    hinhAnh: { type: String, require: true },
    trailer: { type: String, require: true },
    doKho: { type: Number, require: true },
    doTuoi: { type: Number, require: true },
    suatChoi: [{ type: String, require: true }],
    soNguoiToiDa: { type: Number, require: true },
    gia: { type: Number, require: true },
    chinhanh: [{ type: Schema.Types.ObjectId, ref: "ChiNhanh" }],
});

module.exports = mongoose.model("Phong", PhongSchema);
