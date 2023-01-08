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
  name: 'healthy',
  initialState,
  reducers: {
    increment: (state) => {
      state.bodyWeight += 1
    },
    decrement: (state) => {
      state.bodyWeight -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.bodyWeight += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = healthSlice.actions

export default healthSlice.reducer