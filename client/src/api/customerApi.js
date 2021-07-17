import axios from "axios";
import { REACT_API } from "../constant";
export const customerApi = {
    addVoucher: async (id, idVoucher, giaBan) => {
        const response = await axios.post(
            `${REACT_API}/khachhang/${id}/addVoucher`,
            { idVoucher, giaBan }
        );
        console.log(response);
        return response.data;
    },
    getAllCustomers: async () => {
        const response = await axios.get(`${REACT_API}/khachhang`);
        return response.data;
    },
    getCustomer: async (id) => {
        const response = await axios.get(`${REACT_API}/khachhang/${id}`);
        return response.data;
    },
    createCustomer: async (data) => {
        const response = await axios.post(`${REACT_API}/khachhang`, data);
        return response.data;
    },
    deleteCustomer: async (id) => {
        const response = await axios.delete(`${REACT_API}/khachhang/${id}`);
        return response.data;
    },
    updateCustomer: async (id, data) => {
        const response = await axios.put(`${REACT_API}/khachhang/${id}`, data);
        return response.data;
    },
    updatePasswordCustomer: async (data) => {
        const response = await axios.put(
            `${REACT_API}/khachhang/updatepassword`,
            data
        );
        return response.data;
    },
};
