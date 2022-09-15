import { createSlice } from "@reduxjs/toolkit";

const logsSlice = createSlice({
    name: "logs",
    initialState: {
        data:[]
    },
    reducers: {
        addLog: (state, action) => {
            state.data.push(action.payload);
        }
    }
})

export const logsActions = logsSlice.actions;

export default logsSlice.reducer;