import { createSlice } from "@reduxjs/toolkit";
const initialState={
    id:'',
    starTime:'',
    endTime:'',
    spot:[
        {
            id:'11',

        },
        {
            id:'40'
        }
    ],
}

const newBookingSlice=createSlice({
    name:'newBooking',
    initialState,
    reducers:{
        setReservation:(state,action)=>{
            return action.payload
        },
        addSpot:(state,action)=>{
            state.spot = [...state.spot, action.payload]
        },
        deleteSpot:(state,action)=>{
            state.spot=state.spot.filter(s=>s.id==action.payload.id)
        }
    }
})
export const {setReservation,addSpot,deleteSpot}=newBookingSlice.actions
export default newBookingSlice.reducer