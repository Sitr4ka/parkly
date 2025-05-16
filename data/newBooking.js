import { createSlice } from "@reduxjs/toolkit";
const initialState={
    id:'',
    starTime:'',
    endTime:'',
    spot:[],
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
        setStartime:(state,action)=>{
            const d={...state,starTime:action.payload}
            return d
        },
        setEndTime:(state,action)=>{
            const d={...state,endTime:action.payload}
            return d
        },
        
        deleteSpot:(state,action)=>{
            state.spot=state.spot.filter(s=>s.id!==action.payload.id)
        }
    }
})
export const {setReservation,addSpot,deleteSpot,setStartime,setEndTime}=newBookingSlice.actions
export default newBookingSlice.reducer