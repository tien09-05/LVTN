import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { roomsApi } from "../../api/roomsApi";

export const getAllRoomsAsync = createAsyncThunk("rooms/getAll", async () => {
    const response = await roomsApi.getAllRooms();
    return response;
});
const rooms = createSlice({
    name: "rooms",
    initialState: [],
    reducers: {
        getRooms: () => {},
    },
    extraReducers: {
        [getAllRoomsAsync.fulfilled]: (state, action) => {
            return action.payload.phong;
        },
    },
});

const { reducer, actions } = rooms;
export const { getRooms } = actions;
export default reducer;
