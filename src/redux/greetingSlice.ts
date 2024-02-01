import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface IgreetingState {
  onClickButton: boolean
}

const initialState: IgreetingState = {
  onClickButton: true,
}

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    getClickButtonFalse(state, actions: PayloadAction<boolean> ) {
      state.onClickButton = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions, reducer } = greetingSlice
export const selectGreeting = (state:RootState ) => state.greeting

