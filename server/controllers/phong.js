const Phong = require("../models/Phong");

const getAllPhong = async (req, res, next) => {
    try {
        const allPhong = await Phong.find({})
            .populate("chinhanh", "tenChiNhanh diaChi")
            .populate("magiamgia", "tenMaGiamGia");
        res.json({
            success: true,
            message: "Lấy danh sách phòng thành công !!!",
            phong: allPhong,
        });
    } catch (error) {
        console.log(error);
    }
};
const postPhong = async (req, res, next) => {
    try {
        const phong = new Phong(req.body);
        await phong.save();
        res.json({
            success: true,
            message: "Tạo phòng thành công !!! ",
            data: req.body,
        });
    } catch (error) {
        console.log(error);
    }
};

const getPhong = async (req, res, next) => {
    try {
        const phong = await Phong.findById(req.params.id).populate("chinhanh");
        if (!phong)
            return res.json({
                success: false,
                message: "Không tìm thấy phòng này !!!",
            });
        res.json({ success: true, message: "Lấy phòng thành công !!!", phong });
    } catch (error) {
        console.log(error);
    }
};

const updatePhong = async (req, res, next) => {
    try {
        await Phong.findByIdAndUpdate(req.params.id, req.body);
        res.json({ success: true, message: "Cập nhật phòng thành công !!!" });
    } catch (error) {
        console.log(error);
    }
};

const deletePhong = async (req, res, next) => {
    try {
        await Phong.findByIdAndRemove(req.params.id);
        res.json({ success: true, message: "Xóa phòng thành công !!!" });
    } catch (error) {
        console.log(error);
    }
};

const getPhongBySlug = async (req, res, next) => {
    try {
        const phong = await Phong.find({ slug: req.params.slug }).populate(
            "chinhanh"
        );
        if (!phong)
            return res.json({
                success: false,
                message: "Không tìm thấy phòng này !!!",
            });
        res.json({
            success: true,
            message: "Lấy phòng thành công !!!(slug)",
            phong,
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllPhong,
    getPhong,
    postPhong,
    updatePhong,
    deletePhong,
    getPhongBySlug,
};
