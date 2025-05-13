
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: "#RES-1001", spot: "A1", chek_in: "Apr 2, 2025 08:30 AM", check_out: "Apr 2, 2025 10:30 AM",status:'payé' },
  { id: "#RES-1002", spot: "A2", chek_in: "Apr 3, 2025 09:00 AM", check_out: "Apr 3, 2025 11:00 AM",status:"non payé" },
  { id: "#RES-1003", spot: "B1", chek_in: "Apr 4, 2025 07:15 AM", check_out: "Apr 4, 2025 09:15 AM",status:'payé' },
];

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    deleteReservation: (state, action) => {
      return state.filter(res => res.id !== action.payload);
    },
  },
});

export const { deleteReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
