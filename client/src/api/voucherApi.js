import axios from "axios";
import { REACT_API } from "../constant";
export const voucherApi = {
    getAllVouchers: async () => {
        const response = await axios.get(`${REACT_API}/voucher`);
        return response.data;
    },
    getVoucher: async (id) => {
        const response = await axios.get(`${REACT_API}/voucher/${id}`);
        return response.data;
    },
    createVoucher: async (data) => {
        const response = await axios.post(`${REACT_API}/voucher`, data);
        return response.data;
    },
    deleteVoucher: async (id) => {
        const response = await axios.delete(`${REACT_API}/voucher/${id}`);
        return response.data;
    },
    updateVoucher: async (id, data) => {
        const response = await axios.put(`${REACT_API}/voucher/${id}`, data);
        return response.data;
    },
};
