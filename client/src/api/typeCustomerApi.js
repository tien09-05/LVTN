import axios from "axios";
import { REACT_API } from "../constant";
export const typeCustomerApi = {
    getAllTypeCustomer: async () => {
        const response = await axios.get(`${REACT_API}/loaikhachhang`);
        return response.data;
    },
    getTypeCustomer: async (id) => {
        const response = await axios.get(`${REACT_API}/loaikhachhang/${id}`);
        return response.data;
    },
    createTypeCustomer: async (data) => {
        const response = await axios.post(`${REACT_API}/loaikhachhang`, data);
        return response.data;
    },
    deleteTypeCustomer: async (id) => {
        const response = await axios.delete(`${REACT_API}/loaikhachhang/${id}`);
        return response.data;
    },
    updateTypeCustomer: async (id, data) => {
        const response = await axios.put(
            `${REACT_API}/loaikhachhang/${id}`,
            data
        );
        return response.data;
    },
};
