import axios from "axios";
import { REACT_API } from "../constant";
export const branchApi = {
    getAllBranches: async () => {
        const response = await axios.get(`${REACT_API}/chinhanh`);
        return response.data;
    },
    getBranch: async (id) => {
        const response = await axios.get(`${REACT_API}/chinhanh/${id}`);
        return response.data;
    },
    createBranch: async (data) => {
        const response = await axios.post(`${REACT_API}/chinhanh`, data);
        return response.data;
    },
    deleteBranch: async (id) => {
        const response = await axios.delete(`${REACT_API}/chinhanh/${id}`);
        return response.data;
    },
    updateBranch: async (id, data) => {
        const response = await axios.put(`${REACT_API}/chinhanh/${id}`, data);
        return response.data;
    },
};
