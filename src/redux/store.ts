import { configureStore } from '@reduxjs/toolkit'
import {reducer as greetingReducer } from './greetingSlice'

export const store = configureStore({
  reducer: {
    greeting:greetingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch