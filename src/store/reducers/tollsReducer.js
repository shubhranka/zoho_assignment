import { createSlice } from "@reduxjs/toolkit"; 

const tollsSlice = createSlice({
    name: "tolls",
    initialState: {
        "Chengalpattu": {
            tarrifs:{
                carSingle:60,
                carReturn:30,
                lcvSingle:95,
                lcvReturn:50,
                truckSingle:205,
                truckReturn:100,
                heavySingle:320,
                heavyReturn:160
            }
        },
        "Kappalur": {
            tarrifs:{
                carSingle:75,
                carReturn:40,
                lcvSingle:110,
                lcvReturn:60,
                truckSingle:220,
                truckReturn:110,
                heavySingle:335,
                heavyReturn:170
            }
        },
        "Kanchipuram": {
            tarrifs:{
                carSingle:90,
                carReturn:50,
                lcvSingle:125,
                lcvReturn:70,
                truckSingle:235,
                truckReturn:120,
                heavySingle:350,
                heavyReturn:180
            }
        }
    },
    reducers: {
        addToll: (state, action) => {
            const name = action.payload.name;    
            state[name] = {};
            state[name].tarrifs = action.payload.tarrifs;
        },
        deleteToll: (state, action) => {
            const name = action.payload;
            delete state[name];
        }
    }
});

export const tollsActions = tollsSlice.actions;

export default tollsSlice.reducer;