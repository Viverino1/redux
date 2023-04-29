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
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleProfileIsActive, setIsLoggedIn} = profileMenuSlice.actions

export default profileMenuSlice.reducer