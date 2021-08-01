const HoaDon = require('../models/HoaDon')


const getAllHoaDon = async (req, res, next) => {
    try {
        const allHoaDon = await HoaDon.find({}).populate('nhanvien').populate('dondatphong')
        res.json({ success: true, message: 'Lấy danh sách hóa đơn thành công !!!', data: allHoaDon })
    } catch (error) {
        console.log(error);
    }

}
const postHoaDon = async (req, res, next) => {
    try {
        const hoaDon = new HoaDon(req.body)
        await hoaDon.save()
        res.json({ success: true, message: 'Tạo hóa đơn thành công !!!', data: req.body })
    } catch (error) {
        console.log(error);
    }
}

const getHoaDon = async (req, res, next) => {
    try {
        const hoaDon = await HoaDon.findById(req.params.id)
        if (!hoaDon) return res.json({ success: false, message: 'Không tìm thấy hóa đơn này !!!' })
        res.json({ success: true, message: 'Lấy hóa đơn thành công !!!', data: hoaDon })
    } catch (error) {
        console.log(error);
    }
}

const updateHoaDon = async (req, res, next) => {
    try {
        await HoaDon.findByIdAndUpdate(req.params.id, req.body)
        res.json({ success: true, message: 'Cập nhật hóa đơn thành công !!!' })
    } catch (error) {
        console.log(error);
    }
}

const deleteHoaDon = async (req, res, next) => {
    try {
        await HoaDon.findByIdAndRemove(req.params.id)
        res.json({ success: true, message: 'Xóa hóa đơn thành công !!!' })
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAllHoaDon,
    getHoaDon,
    postHoaDon,
    updateHoaDon,
    deleteHoaDon,
}