import axios from "axios";
import { REACT_API } from "../constant";

export const authApi = {
    loginKhachHang: async (data) => {
        const response = await axios.post(`${REACT_API}/khachhang/login`, data);
        return response.data;
    },
    registerKhachHang: async (data) => {
        const response = await axios.post(
            `${REACT_API}/khachhang/register`,
            data
        );
        return response.data;
    },
    loginNhanVien: async (data) => {
        const response = await axios.post(`${REACT_API}/nhanvien/login`, data);
        return response.data;
    },
};
