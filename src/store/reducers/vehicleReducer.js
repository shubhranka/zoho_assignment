import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
    name: "vehicle",
    initialState: {},
    reducers: {
        addVehicle: (state, action) => {
            state[action.payload.vehicleNumber] = {
                type: action.payload.vehicleType,
                tolls: { [action.payload.tollName]: action.payload.dateTime },
            };
        },
        updateVehicle: (state, action) => {
            state[action.payload.vehicleNumber].tolls[action.payload.tollName] = action.payload.dateTime;
        }
    },
});

export const vehicleActions = vehicleSlice.actions;

export default vehicleSlice.reducer;
