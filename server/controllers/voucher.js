const Voucher = require("../models/Voucher");

const getAllVoucher = async (req, res, next) => {
    try {
        const allVoucher = await Voucher.find({});
        res.json({
            success: true,
            message: "Lấy danh sách voucher thành công !!!",
            data: allVoucher,
        });
    } catch (error) {
        console.log(error);
    }
};
const postVoucher = async (req, res, next) => {
    try {
        const voucher = new Voucher(req.body);
        await voucher.save();
        res.json({
            success: true,
            message: "Tạo voucher thành công !!!",
            data: req.body,
        });
    } catch (error) {
        console.log(error);
    }
};

const getVoucher = async (req, res, next) => {
    try {
        const voucher = await Voucher.findById(req.params.id);
        if (!voucher)
            return res.json({
                success: false,
                message: "Không tìm thấy voucher này !!!",
            });
        res.json({
            success: true,
            message: "Lấy voucher thành công !!!",
            data: voucher,
        });
    } catch (error) {
        console.log(error);
    }
};

const updateVoucher = async (req, res, next) => {
    try {
        await Voucher.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            success: true,
            message: "Cập nhật voucher thành công !!!",
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteVoucher = async (req, res, next) => {
    try {
        await Voucher.findByIdAndRemove(req.params.id);
        res.json({ success: true, message: "Xóa voucher thành công !!!" });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllVoucher,
    getVoucher,
    postVoucher,
    updateVoucher,
    deleteVoucher,
};
