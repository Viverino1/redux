import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDateSelectorActive: false,
}

export const newEventMenuSlice = createSlice({
  name: 'newEventMenu',
  initialState,
  reducers: {
    setIsDateSelectorActive(state, action){
        state.isDateSelectorActive = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsDateSelectorActive } = newEventMenuSlice.actions;

export default newEventMenuSlice.reducer;