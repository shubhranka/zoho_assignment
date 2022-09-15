import { createSlice } from "@reduxjs/toolkit"; 

const tollsSlice = createSlice({
    name: "tolls",
    initialState: {},
    reducers: {
        addToll: (state, action) => {
            const name = action.payload.name.toLowerCase();
            state[name] = action.payload.tarrif;
        }
    }
});

export const tollsActions = tollsSlice.actions;

export default tollsSlice.reducer;