import { configureStore } from '@reduxjs/toolkit'
import monthsReducer from '../pages/calendar/components/months/monthsSlice'
import menuReducer from '../pages/calendar/components/menu/menuSlice'
import profileMenuReducer from './components/profileMenu/profileMenuSlice'
import newEventMenuReducer from '../pages/calendar/components/newEventMenu/newEventMenuSlice'

export const store = configureStore({
  reducer: {
    months: monthsReducer,
    menu: menuReducer,
    profileMenu: profileMenuReducer,
    newEventMenu: newEventMenuReducer,
  },
})