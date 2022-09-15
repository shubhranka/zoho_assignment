import { configureStore } from '@reduxjs/toolkit'
import vehicleReducer from './reducers/vehicleReducer'
import logsReducer from './reducers/logsReducer'
import tollsReducer from './reducers/tollsReducer'

export const store = configureStore({
  reducer: {
    vehicleReducer,
    logsReducer,
    tollsReducer
  },
})
