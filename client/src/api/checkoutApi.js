import axios from "axios";
import { REACT_API } from "../constant";

export const checkoutApi = {
    getAllCheckouts: async () => {
        const response = await axios.get(`${REACT_API}/dondatphong`);
        return response.data;
    },
    getCheckout: async (id) => {
        const response = await axios.get(`${REACT_API}/dondatphong/${id}`);
        return response.data;
    },
    createCheckout: async (data) => {
        const response = await axios.post(`${REACT_API}/dondatphong`, data);
        return response.data;
    },
    deleteCheckout: async (id) => {
        const response = await axios.delete(`${REACT_API}/dondatphong/${id}`);
        return response.data;
    },
    updateCheckout: async (id, data) => {
        const response = await axios.put(`${REACT_API}/dondatphong/${id}`, {
            trangThai: data,
        });
        return response.data;
    },
};
