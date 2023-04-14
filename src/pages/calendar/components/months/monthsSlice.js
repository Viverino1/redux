import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayDay: 1,
  displayMonth: 1,
  displayYear: 2023,
}

export const monthsSlice = createSlice({
  name: 'months',
  initialState,
  reducers: {
    setDisplayDay(state, action){
        state.displayDay = action.payload
    },
    incrementDisplayMonth(state){
        if(state.displayMonth < 12){
            state.displayMonth++
        }else{
            state.displayMonth = 1
            state.displayYear++
        }
    },
    decrementDisplayMonth(state){
        if(state.displayMonth > 1){
            state.displayMonth--
        }else{
            state.displayMonth = 12
            state.displayYear--
        }
    },
    setDisplayMonth(state, action){
        state.displayMonth = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDisplayDay, setDisplayMonth, incrementDisplayMonth, decrementDisplayMonth } = monthsSlice.actions

export default monthsSlice.reducer