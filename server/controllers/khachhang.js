const KhachHang = require("../models/KhachHang");
const JWT = require("jsonwebtoken");

const getAllKhachHang = async (req, res, next) => {
    try {
        const allKhachHang = await KhachHang.find({})
            .populate("loaiKhachHang")
            .populate("voucher");
        res.json({
            success: true,
            message: "Lấy danh sách khách hàng thành công !!!",
            data: allKhachHang,
        });
    } catch (error) {
        console.log(error);
    }
};
const registerKhachHang = async (req, res, next) => {
    try {
        // create KhachHang
        const khachHang = new KhachHang(req.body);
        await khachHang.save();

        res.json({
            success: true,
            message: "Đăng ký thành công !!!",
            // token,
            // khachHang,
        });
    } catch (error) {
        console.log(error);
    }
};

const loginKhachHang = async (req, res, next) => {
    try {
        const khachHang = await KhachHang.findOne({
            email: req.body.email,
        })
            .populate("loaiKhachHang")
            .populate("voucher");

        // valid KhachHang simple
        if (!khachHang) {
            return res
                .status(400)
                .json("Email hoặc mặt khẩu không đúng !!! (Email)");
        }
        if (khachHang.matKhau !== req.body.matKhau) {
            return res.status(400).json({
                success: false,
                message: "Email hoặc mặt khẩu không đúng !!!",
            });
        }

        // return token to KhachHang
        const token = JWT.sign(
            {
                name: khachHang.tenKhachHang,
                id: khachHang._id,
            },
            process.env.JWT_SECRET
        );
        res.setHeader("Authorization", token);

        res.status(200).json({
            success: true,
            message: "Đăng nhập thành công !!!",
            token,
            khachHang,
        });
    } catch (error) {
        console.log(error);
    }
};

const getKhachHang = async (req, res, next) => {
    try {
        const khachHang = await KhachHang.findById(req.params.id)
            .populate("loaiKhachHang")
            .populate("voucher");
        if (!khachHang)
            return res.json({
                success: false,
                message: "Không tìm thấy khách hàng này !!!",
            });
        res.status(200).json({
            success: true,
            message: "Lấy khách hàng thành công !!!",
            data: khachHang,
        });
    } catch (error) {
        console.log(error);
    }
};

const updateKhachHang = async (req, res, next) => {
    try {
        await KhachHang.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            success: true,
            message: "Cập nhật khách hàng thành công !!!",
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteKhachHang = async (req, res, next) => {
    try {
        await KhachHang.findByIdAndRemove(req.params.id);
        res.json({ success: true, message: "Xóa khách hàng thành công !!!" });
    } catch (error) {
        console.log(error);
    }
};
const addVoucher = async (req, res, next) => {
    try {
        const khachHang = await KhachHang.findById(req.params.id);
        khachHang.voucher.push(req.body.idVoucher);
        khachHang.diemTichLuy = khachHang.diemTichLuy - req.body.giaBan;
        await khachHang.save();
        res.json({
            success: true,
            message: "Đổi voucher thành công !!!",
            khachHang,
        });
    } catch (error) {
        console.log(error);
    }
};

const updatePasswordKhachHang = async (req, res, next) => {
    try {
        const { condition, matKhauMoi } = req.body;
        await KhachHang.findOneAndUpdate(condition, { matKhau: matKhauMoi });
        res.json({
            success: true,
            message: "Cập nhật mật khẩu mới thành công  !!!",
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllKhachHang,
    getKhachHang,
    registerKhachHang,
    loginKhachHang,
    updateKhachHang,
    deleteKhachHang,
    addVoucher,
    updatePasswordKhachHang,
};
