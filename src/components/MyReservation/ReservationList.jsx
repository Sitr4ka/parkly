// const reservations = [
//   { parking: 'Parking Gare', date: '10/04/2025', status: '', debut: '', fin: '', prix: '' },
//   { parking: 'Parking Centre-ville', date: '07/04/2025', status: '', debut: '', fin: '', prix: '' },
//   { parking: 'Parking Centre-ville', date: '07/04/2025', status: '', debut: '', fin: '', prix: '' },
// ];

import ReservationCard from './ReservationCard';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../../../data/reservationSlice';
import { FaTimes } from 'react-icons/fa';
const ReservationList = () => {
  const reservations = useSelector(state => state.reservations);
  const dispatch = useDispatch();
  return (
    <>
      {/* <h1 class="text-xl font-semibold mb-6">Liste de toutes vos réservations</h1>
      {reservations.map((r) => (
        <ReservationCard reservation={r} />
      ))} */}

      <div className=''>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Reservations</h2>
                  <div className="flex flex-wrap items-center gap-2">
                      <div className="relative">
                          <button className="border border-gray-200 rounded-button px-3 py-1.5 text-sm text-gray-600 flex items-center whitespace-nowrap">
                              <div className="w-4 h-4 flex items-center justify-center mr-1.5">
                                  <i className="ri-filter-3-line"></i>
                              </div>
                              Filter
                          </button>
                      </div>
                      <div className="relative">
                          <button className="border border-gray-200 rounded-button px-3 py-1.5 text-sm text-gray-600 flex items-center whitespace-nowrap">
                              <div className="w-4 h-4 flex items-center justify-center mr-1.5">
                                  <i className="ri-download-line"></i>
                              </div>
                              Export
                          </button>
                      </div>
                      <div className="relative">
                          <button className="border border-gray-200 rounded-button px-3 py-1.5 text-sm text-gray-600 flex items-center whitespace-nowrap">
                              <div className="w-4 h-4 flex items-center justify-center mr-1.5">
                                  <i className="ri-printer-line"></i>
                              </div>
                              Print
                          </button>
                      </div>
                  </div>
            </div>
            <div className="overflow-x-auto custom-scrollbar">
                <table  className='w-full min-w-[800px] text-sm text-left'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                      <tr>
                            <th className="px-4 py-3 font-medium">Booking ID</th>
                      
                            <th className="px-4 py-3 font-medium">Spot</th>
                            <th className="px-4 py-3 font-medium">Check-in</th>
                            <th className="px-4 py-3 font-medium">Check-out</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                            <th className="px-4 py-3 font-medium">Annuler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((r=>(
                          <tr  key={r.id} class="bg-white border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">{r.id}</td>

                          <td className="px-4 py-3">{r.spot}</td>
                          <td className="px-4 py-3">{r.chek_in}</td>
                          <td className="px-4 py-3">{r.check_out}</td>
                          <td className="px-4 py-3">
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">{r.status}</span>
                          </td>
                          <td className="px-4 py-3">
                              <div className="flex items-center space-x-2">
                              
                                  <button  className="text-gray-500 hover:text-red-500"
                                    onClick={() => dispatch(deleteReservation(r.id))}
                                  >
                                     <FaTimes size={24} color="red" />
                                  </button>
                              </div>
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
