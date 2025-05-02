import ParkingLayout from '../../components/ParkingLayout';
import ReservationForm from '../../components/ReservationForm';
import SideBar from '../../components/SideBar';

const Reservation = () => {
  return (
    <>
      <div className="reservation-container">
        <SideBar />
        <main className="">
          <ParkingLayout />
          <ReservationForm />
        </main>
      </div>
    </>
  );
};
