import axios from "axios";
import { REACT_API } from "../constant";

export const roomsApi = {
    getAllRooms: async () => {
        const response = await axios.get(`${REACT_API}/phong`);
        return response.data;
    },
    getRoom: async (id) => {
        const response = await axios.get(`${REACT_API}/phong/${id}`);
        return response.data;
    },
    createRoom: async (data) => {
        const response = await axios.post(`${REACT_API}/phong`, data);
        return response.data;
    },
    deleteRoom: async (id) => {
        const response = await axios.delete(`${REACT_API}/phong/${id}`);
        return response.data;
    },
    updateRoom: async (id, data) => {
        const response = await axios.put(`${REACT_API}/phong/${id}`, data);
        return response.data;
    },
};
