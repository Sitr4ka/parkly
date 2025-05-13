import { configureStore } from '@reduxjs/toolkit';
// import reservationReducer from '../features/reservations/reservationSlice';
import reservationReducer from './reservationSlice';
import newBookingSlice from './newBooking'
export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    newBooking:newBookingSlice
  },
});
