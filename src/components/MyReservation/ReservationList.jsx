const reservations = [
  { parking: 'Parking Gare', date: '10/04/2025', status: '', debut: '', fin: '', prix: '' },
  { parking: 'Parking Centre-ville', date: '07/04/2025', status: '', debut: '', fin: '', prix: '' },
  { parking: 'Parking Centre-ville', date: '07/04/2025', status: '', debut: '', fin: '', prix: '' },
];
import ReservationCard from './ReservationCard';
const ReservationList = () => {
  return (
    <>
      <h1 class="text-xl font-semibold mb-6">Liste de toutes vos réservations</h1>
      {reservations.map((r) => (
        <ReservationCard reservation={r} />
      ))}
    </>
  );
};
export default ReservationList;
