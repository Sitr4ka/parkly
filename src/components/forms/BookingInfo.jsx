import './newBooking.css';

import { useDispatch, useSelector } from 'react-redux';

import { addSpot,setReservation,setStartime } from '../../../data/newBooking';
import ParkingLayout from '../ParkingLayout';
import { createBooking } from '../../api/bookingApi';
import Modal from '../Modal';
import { ModalHeader,ModalBody, ModalFooter } from '../Modal';
import { FaTimes } from 'react-icons/fa';
import { useRef, useState } from 'react';
const BookingInfo = ({show=false,setShow=()=>{}})=>{

    const [currentStep,setCurrentStep]=useState(1)
    const handleClose=()=>{
        setShow(false)
        setCurrentStep(1)
    }
    const next=()=>{
    
        setCurrentStep(currentStep+1)
    }
  return (
    <>
     
        <Modal show={show}>
            {currentStep===1&& <BookingConfirm handleClose={handleClose} next={next}/>}
            {currentStep===2&&<Demande handleClose={handleClose} next={next}/>}
            {currentStep===3&&<Payment handleClose={handleClose}/>}
        </Modal>
    </>
  );

}
function BookingConfirm({handleClose=()=>{},next=()=>{}}){
    const newBooking= useSelector((state)=>state.newBooking)

    const refValidation =useRef('')
    const loading=()=>{setTimeout(()=>{
        refValidation.current.className=''
        refValidation.current.textContent='I accept'
        console.log('d')
        handleCreateBoking()
    },3000)}

    const validation=()=>{
        refValidation.current.className="spinner border-t-4 border-white-500 border-solid rounded-full w-4 h-4 animate-spin"
        refValidation.current.textContent=''
    
        loading()
        clearTimeout(load)
        
    } 
    const handleCreateBoking=async()=>{
        try{
        const data={
            spotId:newBooking.spot[0].id,
            startTime:`${newBooking.date}T${newBooking.startTime}:00`,
            endTime:`${newBooking.date}T${newBooking.endTime}:00`,
            status:'PENDING'
        }
        const r = await createBooking(data)
        console.log(r)
        next()
        
        }catch(e){
            alert('verifier votre données ')
            console.error()
        }
    
        
    }

    return(
        <>
         <ModalHeader>
                <h3 className="text-xl font-semibold text-gray-900  ">
                          Bookings
                </h3>
                <button type="button" className="text-red-400 bg-transparent hover:bg-red-200
                                                       hover:text-amber-50 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center
                                                        items-center "
                onClick={handleClose}
                >
                    <FaTimes></FaTimes>
                    <span class="sr-only">Close modal</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <div className="bookingInfo">
                    <div className="flex text-sm justify-between mb-3">
                        <label className="font-medium">Date</label>
                    <div className="font-light">{newBooking.date}</div>
                </div>
                <div className="flex text-sm justify-between mb-3">
                    <label className="font-medium">Arrival-time</label>
                    <div className="font-light">{newBooking.startTime}  </div>
                </div>
                <div className="flex text-sm justify-between mb-3">
                    <label className="font-medium">Departure-time</label>
                    <div className="font-light">{newBooking.endTime}</div>
                </div>
                <div  className="flex text-sm justify-between mb-3">
                    <label className="font-medium">Spots</label>
                    <div className="font-light">{newBooking.spot.map((s)=>(
                        <span key={s.id}>{s.code}, </span>
                    ))}</div>
                </div>
      </div>
        </ModalBody>
        <ModalFooter>
                <button  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                             dark:hover:bg-blue-700
                            dark:focus:ring-blue-800"
                            onClick={validation}
                        >
                            
                      <div ref={refValidation}>I accept</div></button>
                
                <button  type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100
                 dark:focus:ring-gray-700 dark:bg-gray-800
                  dark:text-gray-400 dark:border-gray-600
                   dark:hover:text-white dark:hover:bg-gray-700"
                 onClick={handleClose}
                >Decline</button>
                <div >

</div>

        </ModalFooter>
        </>
    )
}

function Demande({next,handleClose}){
    return(
        <>
        <ModalHeader>
                <h3 className="text-xl font-semibold text-gray-900  ">
                          Bookings
                </h3>
                <button type="button" className="text-red-400 bg-transparent hover:bg-red-200
                                                       hover:text-amber-50 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center
                                                        items-center "
                onClick={handleClose}
                >
                    <FaTimes></FaTimes>
                    <span class="sr-only">Close modal</span>
                </button>
            </ModalHeader>
            <ModalBody>
            <p>Would you like to pay for your parking reservation now?</p>
        </ModalBody>
        <ModalFooter>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                             dark:hover:bg-blue-700
                            dark:focus:ring-blue-800"
                            onClick={next}
                        >
                            
                        Yes</button>
                <button  type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100
                 dark:focus:ring-gray-700 dark:bg-gray-800
                  dark:text-gray-400 dark:border-gray-600
                   dark:hover:text-white dark:hover:bg-gray-700"
                 onClick={handleClose}
                >No</button>
        </ModalFooter>
        </>
    )

}
function Payment({next,handleClose}) {
  return (

    <>
    <ModalHeader>
         <button type="button" className="text-red-400 bg-transparent hover:bg-red-200
                                                       hover:text-amber-50 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center
                                                        items-center "
                onClick={handleClose}
        ></button>
    </ModalHeader>
    <ModalBody>
         <div className="flex flex-col items-start mb-4">
        <label htmlFor="paymentType">Payment</label>
        <select className='border  w-full py-2 ps-3 rounded-md' name="paymentMethod" id="paymentMethod">
            <option value="MVola">Mvola</option>
            <option value="Airtel Money">Airtel Money</option>
            <option value="Orange Money">Orange Money</option>
        </select>
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="number">Phone number</label>
        <input className='formInput' type="number" name="paymentType" id="paymentType" />
      </div>
    </ModalBody>
    <ModalFooter>
         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                             dark:hover:bg-blue-700
                            dark:focus:ring-blue-800"
                            onClick={()=>{}}
                        >
                            
                        Payd</button>
                <button  type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100
                 dark:focus:ring-gray-700 dark:bg-gray-800
                  dark:text-gray-400 dark:border-gray-600
                   dark:hover:text-white dark:hover:bg-gray-700"
                 onClick={handleClose}
                >Decline</button>
    </ModalFooter>
     
    </>
  );
}
export default BookingInfo