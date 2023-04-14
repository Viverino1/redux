import { configureStore } from '@reduxjs/toolkit'
import monthsReducer from '../pages/calendar/components/months/monthsSlice'

export const store = configureStore({
  reducer: {
    months: monthsReducer,
  },
})