const LoaiKhachHang = require('../models/LoaiKhachHang')


const getAllLoaiKhachHang = async (req, res, next) => {
    try {
        const allLoaiKhachHang = await LoaiKhachHang.find({})
        res.json({ success: true, message: 'Lấy danh sách loại khách hàng thành công !!!', data: allLoaiKhachHang })
    } catch (error) {
        console.log(error);
    }

}
const postLoaiKhachHang = async (req, res, next) => {
    try {
        const loaiKhachHang = new LoaiKhachHang(req.body)
        await loaiKhachHang.save()
        res.json({ success: true, message: 'Tạo loại khách hàng thành công !!!', data: req.body })
    } catch (error) {
        console.log(error);
    }
}

const getLoaiKhachHang = async (req, res, next) => {
    try {
        const loaiKhachHang = await LoaiKhachHang.findById(req.params.id)
        if (!loaiKhachHang) return res.json({ success: false, message: 'Không tìm thấy loại khách hàng này !!!' })
        res.json({ success: true, message: 'Lấy loại khách hàng thành công !!!', data: loaiKhachHang })
    } catch (error) {
        console.log(error);
    }
}

const updateLoaiKhachHang = async (req, res, next) => {
    try {
        await LoaiKhachHang.findByIdAndUpdate(req.params.id, req.body)
        res.json({ success: true, message: 'Cập nhật loại khách hàng thành công !!!' })
    } catch (error) {
        console.log(error);
    }
}

const deleteLoaiKhachHang = async (req, res, next) => {
    try {
        await LoaiKhachHang.findByIdAndRemove(req.params.id)
        res.json({ success: true, message: 'Xóa loại khách hàng thành công !!!' })
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAllLoaiKhachHang,
    getLoaiKhachHang,
    postLoaiKhachHang,
    updateLoaiKhachHang,
    deleteLoaiKhachHang,
}