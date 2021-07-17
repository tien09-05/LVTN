const DonDatPhong = require("../models/DonDatPhong");
const KhachHang = require("../models/KhachHang");

const getAllDonDatPhong = async (req, res, next) => {
    try {
        const allDonDatPhong = await DonDatPhong.find({})
            .populate("khachhang")
            .populate("phong")
            .populate("chinhanh")
            .populate("voucher");
        res.json({
            success: true,
            message: "Lấy danh sách đơn đặt phòng thành công !!!",
            data: allDonDatPhong,
        });
    } catch (error) {
        console.log(error);
    }
};

const postDonDatPhong = async (req, res, next) => {
    try {
        const donDatPhong = new DonDatPhong(req.body);
        const khachhang = await KhachHang.findById(req.body.khachhang);

        khachhang.voucher = khachhang.voucher.filter(
            (item) => item.toString() !== req.body.voucher
        );
        await khachhang.save();
        await donDatPhong.save();

        res.json({
            success: true,
            message: "Đặt phòng thành công !!! ",
            data: req.body,
        });
    } catch (error) {
        console.log(error);
    }
};

const getDonDatPhong = async (req, res, next) => {
    try {
        const donDatPhong = await DonDatPhong.findById(req.params.id);
        if (!donDatPhong)
            return res.json({
                success: false,
                message: "Không tìm thấy đơn đặt phòng này !!!",
            });
        res.json({
            success: true,
            message: "Lấy đơn đặt phòng thành công !!!",
            data: donDatPhong,
        });
    } catch (error) {
        console.log(error);
    }
};

const updateDonDatPhong = async (req, res, next) => {
    try {
        const donDatphong = await DonDatPhong.findByIdAndUpdate(
            req.params.id,
            req.body
        ).populate("khachhang");
        console.log(donDatphong);
        res.json({
            success: true,
            message: "Cập nhật đơn đặt phòng thành công !!!",
            donDatphong,
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteDonDatPhong = async (req, res, next) => {
    try {
        await DonDatPhong.findByIdAndRemove(req.params.id);
        res.json({
            success: true,
            message: "Xóa đơn đặt phòng thành công !!!",
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllDonDatPhong,
    getDonDatPhong,
    postDonDatPhong,
    updateDonDatPhong,
    deleteDonDatPhong,
};
