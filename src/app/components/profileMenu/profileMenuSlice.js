import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActive: false,
  isLoggedIn: false,
}

export const profileMenuSlice = createSlice({
  name: 'profileMenu',
  initialState,
  reducers: {
    toggleProfileIsActive(state){
        state.isActive = !state.isActive;
    },
    setIsLoggedIn(state, action){
        state.isLoggedIn = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleProfileIsActive, setIsLoggedIn} = profileMenuSlice.actions

export default profileMenuSlice.reducer