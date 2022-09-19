import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
    name: "vehicle",
    initialState: {
        "TN24AQ4644":{
            type: "car",
            tolls:{
                Chengalpattu: (new Date()).toLocaleString(),
            }
        },
        "TN19QQ1234":{
            type: "car",
            tolls:{
                Kappalur: (new Date()).toLocaleString(),
            }
        },
        "TN24AA1235":{
            type: "heavy",
            tolls:{
                Kappalur: (new Date()).toLocaleString(),
            }
        }
    },
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
