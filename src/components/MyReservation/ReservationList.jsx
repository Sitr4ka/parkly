import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../../../data/reservationSlice';
import { useState } from 'react';

const ReservationList = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const handleDelete=(id)=>{
    dispatch(deleteReservation(id))
  }
  const [search,setSearch]=useState('')
  
  // Search
  const filterRes=(reservations==[])?[]:reservations.filter(
    r=>r.id.toLowerCase().includes(search.toLocaleLowerCase())||
    r.spot.toLowerCase().includes(search.toLocaleLowerCase())||
    r.status.toLowerCase().includes(search.toLocaleLowerCase())||
    r.startTime.toLowerCase().includes(search.toLocaleLowerCase())||
    r.endTime.toLowerCase().includes(search.toLocaleLowerCase())
)
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
                            <th className="px-4 py-3 font-medium">Booking ID</th>
                      
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
                          <td className="px-4 py-3 font-medium text-gray-900">{r.id}</td>

                          <td className="px-4 py-3">{r.spot}</td>
                          <td className="px-4 py-3">{r.startTime}</td>
                          <td className="px-4 py-3">{r.endTime}</td>
                          <td className="px-4 py-3">
                            {r.status.toLowerCase()==="payed"&&
                              <span className="px-2 py-1 rounded bg-green-100 text-green-800">{r.status}</span> 
                            }
                            {r.status.toLowerCase()==="unpayed"&& 
                                <span className="px-2 py-1 rounded bg-red-100 text-red-800">{r.status}</span>
                            } 
                             
                          </td>
                          <td className="px-4 py-3">
                            
                            <div className='flex items-center space-x-2'>
                                <button class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"  
                                    disabled={r.status.toLowerCase()==="payed"} 
                                >Pay</button>
                                <button className="bg-gray-500 text-white px-3 py-1 rounded"
                                  onClick={()=>handleDelete(r.id)}
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
          </div>      
    </>
  );
};
export default ReservationList;
