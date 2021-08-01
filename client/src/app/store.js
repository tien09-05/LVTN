import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../feature/Room/roomsSlice";
import authReducer from "../feature/Auth/authSlice";

const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        auth: authReducer,
    },
});

export default store;
