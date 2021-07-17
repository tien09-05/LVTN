import { createSlice } from "@reduxjs/toolkit";
const { token, user } = JSON.parse(localStorage.getItem("auth"))
    ? JSON.parse(localStorage.getItem("auth"))
    : { token: null, user: null };
const initialState = user;
const auth = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            return action.payload;
        },
        logout: (state, action) => {
            return null;
        },
        addVoucherAction: (state, action) => {
            const voucher = [...state.voucher];

            voucher.push(action.payload.voucher);
            const diemTichLuy =
                state.diemTichLuy - action.payload.voucher.giaBan;
            const newState = {
                ...state,
                voucher,
                diemTichLuy,
            };
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    token,
                    user: newState,
                })
            );
            return newState;
        },
        removeVoucherAction: (state, action) => {
            const voucher = state.voucher.filter(
                (item) => item._id.toString() !== action.payload.voucher
            );

            const newState = {
                ...state,
                voucher,
            };
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    token,
                    user: newState,
                })
            );
            return newState;
        },
    },
});

const { reducer, actions } = auth;
export const { login, logout, addVoucherAction, removeVoucherAction } = actions;
export default reducer;
