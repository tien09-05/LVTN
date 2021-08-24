const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const chinhanhRoute = require("./routes/chinhanh");
const phongRoute = require("./routes/phong");
const loaikhachhangRoute = require("./routes/loaikhachhang");
const voucherRoute = require("./routes/voucher");
const khachhangRoute = require("./routes/khachhang");
const nhanvienRoute = require("./routes/nhanvien");
const dondatphongRoute = require("./routes/dondatphong");
const hoadonRoute = require("./routes/hoadon");
const baidanhgiaRoute = require("./routes/baidanhgia");

// mongoose
//     .connect("mongodb+srv://tien09-05:123123123@cluster0.mg6k7.mongodb.net/luanvan?retryWrites=true&w=majority", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//     })
//     .then(() => console.log("Connected Database"));
mongoose
    .connect("mongodb://localhost/luanvan", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log("Connected Database"));

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.get("/", (req, res) => {
    res.json({ success: true });
});

app.use("/api/chinhanh", chinhanhRoute);
app.use("/api/phong", phongRoute);
app.use("/api/loaikhachhang", loaikhachhangRoute);
app.use("/api/voucher", voucherRoute);
app.use("/api/khachhang", khachhangRoute);
app.use("/api/nhanvien", nhanvienRoute);
app.use("/api/dondatphong", dondatphongRoute);
app.use("/api/hoadon", hoadonRoute);
app.use("/api/baidanhgia", baidanhgiaRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Connect app successful ${port}`));
