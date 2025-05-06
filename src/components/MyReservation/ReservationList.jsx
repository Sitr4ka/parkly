const reservations = [
  { parking: 'Parking Gare', date: '10/04/2025', status: '', debut: '', fin: '', prix: '' },
  { parking: 'Parking Centre-ville', date: '07/04/2025', status: '', debut: '', fin: '', prix: '' },
  { parking: 'Parking Centre-ville', date: '07/04/2025', status: '', debut: '', fin: '', prix: '' },
];
const res= [
  {id:"#RES-2504", spot:'A1',chek_in:"Apr 2, 2025 08:30 AM",check_out:"Apr 2, 2025 08:30 AM"},
  {id:"#RES-2504", spot:'A1',chek_in:"Apr 2, 2025 08:30 AM",check_out:"Apr 2, 2025 08:30 AM"},
  {id:"#RES-2504", spot:'A1',chek_in:"Apr 2, 2025 08:30 AM",check_out:"Apr 2, 2025 08:30 AM"},
  {id:"#RES-2504", spot:'A1',chek_in:"Apr 2, 2025 08:30 AM",check_out:"Apr 2, 2025 08:30 AM"},
  {id:"#RES-2504", spot:'A1',chek_in:"Apr 2, 2025 08:30 AM",check_out:"Apr 2, 2025 08:30 AM"},
  {id:"#RES-2504", spot:'A1',chek_in:"Apr 2, 2025 08:30 AM",check_out:"Apr 2, 2025 08:30 AM"},

]
import ReservationCard from './ReservationCard';
const ReservationList = () => {
  return (
    <>
      {/* <h1 class="text-xl font-semibold mb-6">Liste de toutes vos réservations</h1>
      {reservations.map((r) => (
        <ReservationCard reservation={r} />
      ))} */}

      <div className=''>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <h2 class="text-lg font-semibold text-gray-800">Recent Reservations</h2>
                  <div class="flex flex-wrap items-center gap-2">
                      <div class="relative">
                          <button class="border border-gray-200 rounded-button px-3 py-1.5 text-sm text-gray-600 flex items-center whitespace-nowrap">
                              <div class="w-4 h-4 flex items-center justify-center mr-1.5">
                                  <i class="ri-filter-3-line"></i>
                              </div>
                              Filter
                          </button>
                      </div>
                      <div class="relative">
                          <button class="border border-gray-200 rounded-button px-3 py-1.5 text-sm text-gray-600 flex items-center whitespace-nowrap">
                              <div class="w-4 h-4 flex items-center justify-center mr-1.5">
                                  <i class="ri-download-line"></i>
                              </div>
                              Export
                          </button>
                      </div>
                      <div class="relative">
                          <button class="border border-gray-200 rounded-button px-3 py-1.5 text-sm text-gray-600 flex items-center whitespace-nowrap">
                              <div class="w-4 h-4 flex items-center justify-center mr-1.5">
                                  <i class="ri-printer-line"></i>
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
                            <th className="px-4 py-3 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((r=>(
                          <tr  key={r.id} class="bg-white border-b hover:bg-gray-50">
                          <td class="px-4 py-3 font-medium text-gray-900">{r.id}</td>

                          <td class="px-4 py-3">{r.spot}</td>
                          <td class="px-4 py-3">{r.chek_in}</td>
                          <td class="px-4 py-3">{r.check_out}</td>
                          <td class="px-4 py-3">
                              <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Reserved</span>
                          </td>
                          <td class="px-4 py-3">
                              <div class="flex items-center space-x-2">
                                  <button class="text-gray-500 hover:text-primary">
                                      <div class="w-8 h-8 flex items-center justify-center">
                                          <i class="ri-edit-line"></i>
                                      </div>
                                  </button>
                                  <button class="text-gray-500 hover:text-red-500">
                                      <div class="w-8 h-8 flex items-center justify-center">
                                          <i class="ri-delete-bin-line"></i>
                                      </div>
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
