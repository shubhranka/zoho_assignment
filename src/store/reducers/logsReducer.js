import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[
        {
            vehicleNumber: "TN24AQ4644",
            tollName: "Chengalpattu",
            dateTime: (new Date()).toLocaleString(),
            tarrif: 60,
            vehicleType: "car",
        },
        {
            vehicleNumber: "TN19QQ1234",
            tollName: "Kappalur",
            dateTime: (new Date()).toLocaleString(),
            tarrif: 75,
            vehicleType: "car",
        },
        {
            vehicleNumber: "TN24AA1235",
            tollName: "Kappalur",
            dateTime: (new Date()).toLocaleString(),
            tarrif: 335,
            vehicleType: "heavy",
        }
    ]
}

let localInitial = localStorage.getItem("zoho_assignment_redux_state");
if(localInitial){
    localInitial = JSON.parse(localInitial);
    initialState.data = localInitial.logsReducer.data;
}

const logsSlice = createSlice({
    name: "logs",
    initialState: initialState,
    reducers: {
        addLog: (state, action) => {
            state.data.push(action.payload);
        }
    }
})

export const logsActions = logsSlice.actions;

export default logsSlice.reducer;