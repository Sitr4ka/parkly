import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../../../data/reservationSlice';
import { useState } from 'react';

const ReservationList = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const handleDelete=(id)=>{
    dispatch(deleteReservation(id))
  }
  const [search,setSearch]=useState('#RES-1001')
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
          placeholder="Trouver un parking"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Rechercher</button>
      </header>
  
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[800px] text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
              {reservations.map((r) => (
                <tr key={r.id} class="bg-white border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{r.id}</td>

                  <td className="px-4 py-3">{r.spot}</td>
                  <td className="px-4 py-3">{r.chek_in}</td>
                  <td className="px-4 py-3">{r.check_out}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <button
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => dispatch(deleteReservation(r.id))}
                      >
                        <FaTimes size={24} color="red" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ReservationList;
