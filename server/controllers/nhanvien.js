const NhanVien = require("../models/NhanVien");
const JWT = require("jsonwebtoken");
const getAllNhanVien = async (req, res, next) => {
    try {
        const allNhanVien = await NhanVien.find({}).populate("chinhanh");
        res.json({
            success: true,
            message: "Lấy danh sách nhân viên thành công !!!",
            data: allNhanVien,
        });
    } catch (error) {
        console.log(error);
    }
};
const signUpNhanVien = async (req, res, next) => {
    try {
        let checkEmail = await NhanVien.findOne({ email: req.body.email });
        if (checkEmail)
            return res.json({ success: false, message: "Email đã tồn tại !!!" });

        let checkSDT = await NhanVien.findOne({ soDienThoai: req.body.soDienThoai });
        if (checkSDT)
            return res.json({ success: false, message: "Số điện thoại đã tồn tại !!!" });

        const nhanVien = new NhanVien(req.body);
        await nhanVien.save();
        res.json({
            success: true,
            message: "Tạo nhân viên thành công !!!",
            data: req.body,
        });
    } catch (error) {
        console.log(error);
    }
};

const loginNhanVien = async (req, res, next) => {
    try {
        const nhanVien = await NhanVien.findOne({ email: req.body.email });

        // valid nhanvien simple
        if (!nhanVien)
            return res.json("Email hoặc mặt khẩu không đúng !!! (Email)");
        if (nhanVien.password !== req.body.password)
            return res.json("Email hoặc mặt khẩu không đúng !!!");

        // return token to nhanvien
        const token = JWT.sign(
            {
                name: nhanVien.tenNhanVien,
                id: nhanVien._id,
                role: nhanVien.chucvu,
            },
            process.env.JWT_SECRET
        );
        res.setHeader("Authorization", token);

        res.json({
            success: true,
            message: "Đăng nhập thành công !!!",
            token,
            nhanVien,
        });
    } catch (error) {
        console.log(error);
    }
};

const getNhanVien = async (req, res, next) => {
    try {
        const nhanVien = await NhanVien.findById(req.params.id);
        if (!nhanVien)
            return res.json({
                success: false,
                message: "Không tìm thấy nhân viên này",
            });
        res.json({
            success: true,
            message: "Lấy nhân viên thành công !!!",
            data: nhanVien,
        });
    } catch (error) {
        console.log(error);
    }
};

const updateNhanVien = async (req, res, next) => {
    try {
        await NhanVien.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            success: true,
            message: "Cập nhật nhân viên thành công !!!",
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteNhanVien = async (req, res, next) => {
    try {
        await NhanVien.findByIdAndRemove(req.params.id);
        res.json({ success: true, message: "Xóa nhân viên thành công !!!" });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllNhanVien,
    getNhanVien,
    signUpNhanVien,
    loginNhanVien,
    updateNhanVien,
    deleteNhanVien,
};
