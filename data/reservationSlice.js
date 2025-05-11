import { createSlice } from '@reduxjs/toolkit';

const initialState = [

  { id: "#RES-1001", spot: "A1", startTime: "Apr 2, 2025 08:30 AM", endTime: "Apr 2, 2025 10:30 AM",status:'payed' },
  { id: "#RES-1002", spot: "A2", startTime: "Apr 3, 2025 09:00 AM", endTime: "Apr 3, 2025 11:00 AM",status:"unpayed" },
  { id: "#RES-1003", spot: "B1", startTime: "Apr 4, 2025 07:15 AM", endTime: "Apr 4, 2025 09:15 AM",status:'payed' },
];

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    setReservation:(state,action)=>{
      return action.payload
    },
    deleteReservation: (state, action) => {
      return state.filter((res) => res.id !== action.payload);
    },
  },
});

export const { deleteReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
