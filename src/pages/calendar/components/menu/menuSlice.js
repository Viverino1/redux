import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActive: true,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleIsActive(state){
        state.isActive = !state.isActive;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleIsActive } = menuSlice.actions

export default menuSlice.reducer