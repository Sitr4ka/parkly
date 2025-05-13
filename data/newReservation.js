import { createSlice } from "@reduxjs/toolkit";
import Reservation from "../src/pages/reservation/Reservation";
const initialState={
    id:'',
    starTime:'',
    endTime:'',
    spot:[],
}

const newReservationSlice=createSlice({
    name:'newReservation',
    initialState,
    reducers:{
        setReservation:(state,action)=>{
            return action.payload
        }
    }
})
export const {setReservation}=newReservationSlice.actions
export default newReservationSlice.reducer