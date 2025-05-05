
const reservations = [
  { parking: 'Parking Gare', date: '10/04/2025', status: '', debut: '', fin: '', prix: '' },
  { parking: 'Parking Centre-ville', date: '07/04/2025', status: '', debut: '', fin: '', prix: '' },
  { parking: 'Parking Centre-ville', date: '07/04/2025', status: '', debut: '', fin: '', prix: '' }
];
import ReservationCard from "./ReservationCard";
const ReservationList=()=>{
    return(
        <main class="flex-1 p-8">
        <h1 class="text-xl font-semibold mb-6">Liste de toutes vos réservations</h1>
          {reservations.map((r=>(
            <ReservationCard reservation={r}/>
          )))}
      </main>
    
    )
}
export default ReservationList