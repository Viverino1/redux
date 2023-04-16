import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActive: false,
}

export const profileMenuSlice = createSlice({
  name: 'profileMenu',
  initialState,
  reducers: {
    toggleProfileIsActive(state){
        state.isActive = !state.isActive;
        console.log(state.isActive)
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleProfileIsActive } = profileMenuSlice.actions

export default profileMenuSlice.reducer