import { createSlice, configureStore } from '@reduxjs/toolkit'

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState: {
  },
  reducers: {
    addVehicle: (state, action) => {
        state[action.payload.id] = action.payload.type
    }
  }
})

export const vehicleActions = vehicleSlice.actions

export default vehicleSlice.reducer