import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HealthState {
    achivemnetRate: number,
    bodyWeight: number,
    bodyFat: number
}

const initialState: HealthState = {
    achivemnetRate: 0,
    bodyWeight: 0,
    bodyFat: 0
}

export const healthSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default healthSlice.reducer