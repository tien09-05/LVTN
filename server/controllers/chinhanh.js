const ChiNhanh = require('../models/ChiNhanh')


const getAllChiNhanh = async (req, res, next) => {
    try {
        const Allchinhanh = await ChiNhanh.find({})
        res.json({ success: true, message: 'Lấy danh sách chi nhánh thành công !!!', data: Allchinhanh })
    } catch (error) {
        console.log(error);
    }

}
const postChiNhanh = async (req, res, next) => {
    try {
        const chinhanh = new ChiNhanh(req.body)
        console.log(chinhanh);
        await chinhanh.save()
        res.json({ success: true, message: 'Tạo chi nhánh thành công !!! ', data: req.body })
    } catch (error) {
        console.log(error);
    }
}

const getChiNhanh = async (req, res, next) => {
    try {
        const chinhanh = await ChiNhanh.findById(req.params.id)
        if (!chinhanh) return res.json({ success: false, message: 'Không tìm thấy chi nhánh này !!!' })
        res.json({ success: true, message: 'lấy chi nhánh thành công !!!', data: chinhanh })
    } catch (error) {
        console.log(error);
    }
}

const updateChiNhanh = async (req, res, next) => {
    try {
        await ChiNhanh.findByIdAndUpdate(req.params.id, req.body)
        res.json({ success: true, message: 'Cập nhật chi nhánh thành công !!!' })
    } catch (error) {
        console.log(error);
    }
}

const deleteChiNhanh = async (req, res, next) => {
    try {
        await ChiNhanh.findByIdAndRemove(req.params.id)
        res.json({ success: true, message: 'Xóa chi nhánh thành công !!!' })
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAllChiNhanh,
    getChiNhanh,
    postChiNhanh,
    updateChiNhanh,
    deleteChiNhanh,
}