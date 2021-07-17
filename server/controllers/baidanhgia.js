const BaiDanhGia = require('../models/BaiDanhGia')


const getAllBaiDanhGia = async (req, res, next) => {
    try {
        const allBaiDanhGia = await BaiDanhGia.find({}).populate('khachhang').populate('phong')
        res.json({ success: true, message: 'Lấy danh sách bài đánh giá thành công !!!', data: allBaiDanhGia })
    } catch (error) {
        console.log(error);
    }

}
const postBaiDanhGia = async (req, res, next) => {
    try {
        const baiDanhGia = new BaiDanhGia(req.body)
        await baiDanhGia.save()
        res.json({ success: true, message: 'Tạo bài đánh giá thành công !!! ', data: req.body })
    } catch (error) {
        console.log(error);
    }
}

const getBaiDanhGia = async (req, res, next) => {
    try {
        const baiDanhGia = await BaiDanhGia.findById(req.params.id)
        if (!baiDanhGia) return res.json({ success: false, message: 'Không tìm thấy bài đánh giá này !!!' })
        res.json({ success: true, message: 'Lấy bài đánh giá thành công !!!', data: baiDanhGia })
    } catch (error) {
        console.log(error);
    }
}

const updateBaiDanhGia = async (req, res, next) => {
    try {
        await BaiDanhGia.findByIdAndUpdate(req.params.id, req.body)
        res.json({ success: true, message: 'Cập nhật bài đánh giá thành công !!!' })
    } catch (error) {
        console.log(error);
    }
}

const deleteBaiDanhGia = async (req, res, next) => {
    try {
        await BaiDanhGia.findByIdAndRemove(req.params.id)
        res.json({ success: true, message: 'Xóa bài đánh giá thành công !!!' })
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAllBaiDanhGia,
    getBaiDanhGia,
    postBaiDanhGia,
    updateBaiDanhGia,
    deleteBaiDanhGia,
}