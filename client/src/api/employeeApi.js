import axios from "axios";
import { REACT_API } from "../constant";
export const employeeApi = {
    getAllEmployees: async () => {
        const response = await axios.get(`${REACT_API}/nhanvien`);
        return response.data;
    },
    getEmployee: async (id) => {
        const response = await axios.get(`${REACT_API}/nhanvien/${id}`);
        return response.data;
    },
    createEmployee: async (data) => {
        const response = await axios.post(`${REACT_API}/nhanvien`, data);
        return response.data;
    },
    deleteEmployee: async (id) => {
        const response = await axios.delete(`${REACT_API}/nhanvien/${id}`);
        return response.data;
    },
    updateEmployee: async (id, data) => {
        const response = await axios.put(`${REACT_API}/nhanvien/${id}`, data);
        return response.data;
    },
};
