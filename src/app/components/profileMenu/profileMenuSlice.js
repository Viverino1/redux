import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActive: true,
}

export const profileMenuSlice = createSlice({
  name: 'profileMenu',
  initialState,
  reducers: {
    toggleIsActive(state){
        state.isActive = !state.isActive;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleIsActive } = profileMenuSlice.actions

export default profileMenuSlice.reducer