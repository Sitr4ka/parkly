import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../../../data/reservationSlice';
import { useEffect, useState } from 'react';
import Modal from '../Modal';
import { ModalHeader,ModalBody,ModalFooter } from '../Modal';
import { FaTimes } from 'react-icons/fa';
import { fetchBookings } from '../../api/bookingApi';
import { formatDate } from '../../utils/formatDate';
const ReservationList = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const handleDelete=(id)=>{
    // dispatch(deleteReservation(id))
    const r = res.filter(res => res.id !== id)
    setRes(r)
    setshowCancel(false)
  }
  
  const [res,setRes]=useState([])
  const [search,setSearch]=useState('')
  const [showPayd,setShoPayd]=useState(false)
  const [showCancel,setshowCancel]=useState(false)
  const [idDelete,setiDelete]=useState('')
  // Search
  const filterRes=(res==[])?[]:res.filter(
    r=>r.id.toLowerCase().includes(search.toLocaleLowerCase())||
    r.spot.code.toLowerCase().includes(search.toLocaleLowerCase())||
    r.status.toLowerCase().includes(search.toLocaleLowerCase())||
    r.startTime.toLowerCase().includes(search.toLocaleLowerCase())||
    r.endTime.toLowerCase().includes(search.toLocaleLowerCase())
)
useEffect(()=>{
  fetchBookings().then((r)=>{
    console.log(r)
    // setReservation(r)
    setRes(r)
  }).catch((e)=>{console.log(e)})
},[])
  return (
    <>
      <div className=''>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Reservations</h2>
        </div>
          <header className="flex gap-2 mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder=" Search for a  reservation"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Rechercher</button>
      </header>
        <div className="overflow-x-auto custom-scrollbar">
                <table  className='w-full min-w-[800px] text-sm text-left'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                      <tr>
                      
                            <th className="px-4 py-3 font-medium">Spot</th>
                            <th className="px-4 py-3 font-medium">Check-in</th>
                            <th className="px-4 py-3 font-medium">Check-out</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                            <th className="px-4 py-3 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterRes.map((r=>(
                          <tr  key={r.id} class="bg-white border-b hover:bg-gray-50">

                          <td className="px-4 py-3">{r.spot.code}</td>
                          <td className="px-4 py-3">{formatDate(r.startTime)}</td>
                          <td className="px-4 py-3">{formatDate(r.endTime)}</td>
                          <td className="px-4 py-3">
                            {r.status.toLowerCase()==="pending"&&
                              <span className="px-2 py-1 rounded bg-green-100 text-green-800">{r.status.toLowerCase()}</span> 
                            }
                            {r.status.toLowerCase()==="unpayed"&& 
                                <span className="px-2 py-1 rounded bg-red-100 text-red-800">{r.status}</span>
                            } 
                             
                          </td>
                          
                          <td className="px-4 py-3">
                            
                            <div className='flex items-center space-x-2'>
                                <button class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"  
                                    disabled={r.status.toLowerCase()==="payed"} 
                                    onClick={()=>setShoPayd(true)}
                                >Pay</button>
                                <button className="bg-gray-500 text-white px-3 py-1 rounded"
                                  onClick={()=>{
                                    setiDelete(r.id)
                                    setshowCancel(true)
                                  }}
                                  >
                                    Cancel
                                </button>
                            </div>
                          </td>
                        <td>
                  
                        </td>
                      </tr>
                        )))}
                    </tbody>
                </table>
            </div>
            <Modal show={showPayd}>
              <ModalHeader>
                    <button type="button" className="text-red-400 bg-transparent hover:bg-red-200
                                                       hover:text-amber-50 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center
                                                        items-center "
                onClick={()=>setShoPayd(false)}
              >
                  <FaTimes></FaTimes>
                              <span class="sr-only">Close modal</span>
                  </button>
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
                          onClick={()=>setShoPayd(false)}
                          >Decline</button>
              </ModalFooter>
            </Modal>
            <Modal show={showCancel}>
                <ModalHeader>
                      
                </ModalHeader>
                <ModalBody>
                    <p>Would you like to cancel for your parking reservation?</p>
                </ModalBody>
                <ModalFooter>
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                                      dark:hover:bg-blue-700
                                      dark:focus:ring-blue-800"
                                      onClick={()=>{
                                        handleDelete(idDelete)
                                        
                                      }}
                                  >
                                      
                                  Yes</button>
                          <button  type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100
                          dark:focus:ring-gray-700 dark:bg-gray-800
                            dark:text-gray-400 dark:border-gray-600
                            dark:hover:text-white dark:hover:bg-gray-700"
                          onClick={()=>setshowCancel(false)}
                          >No</button>
                        
                </ModalFooter>
            </Modal>
          </div>      
    </>
  );
};
export default ReservationList;
