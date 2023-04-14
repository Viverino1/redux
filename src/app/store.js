import { configureStore } from '@reduxjs/toolkit'
import monthsReducer from '../pages/calendar/components/months/monthsSlice'
import menuReducer from '../pages/calendar/components/menu/menuSlice'

export const store = configureStore({
  reducer: {
    months: monthsReducer,
    menu: menuReducer,
  },
})