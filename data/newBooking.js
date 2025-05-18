import { createSlice } from "@reduxjs/toolkit";
const initialState={
    id:'',
    date: new Date().toLocaleDateString('fr-CA').slice(0, 10),
    startTime:'08:00',
    endTime:'09:00',
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
        setDateBooking:(state,action)=>{
            const d ={...state,date:action.payload}
            return d
        },
        setStartime:(state,action)=>{
            const d={...state,startTime:action.payload}
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
export const {setReservation,addSpot,deleteSpot,setStartime,setEndTime,setDateBooking}=newBookingSlice.actions
export default newBookingSlice.reducer