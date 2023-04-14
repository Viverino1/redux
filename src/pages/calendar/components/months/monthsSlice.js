import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayDay: 0,
}

export const monthsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setDisplayDay: (state, action) => {
        state.displayDay = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setDisplayDay } = monthsSlice.actions

export default monthsSlice.reducer