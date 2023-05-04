import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDateSelectorActive: false,
    isNewEventMenuActive: false,
}

export const newEventMenuSlice = createSlice({
  name: 'newEventMenu',
  initialState,
  reducers: {
    setIsNewEventMenuActive(state, action){
      state.isNewEventMenuActive = action.payload;
    },
    setIsDateSelectorActive(state, action){
        state.isDateSelectorActive = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsDateSelectorActive, setIsNewEventMenuActive } = newEventMenuSlice.actions;

export default newEventMenuSlice.reducer;