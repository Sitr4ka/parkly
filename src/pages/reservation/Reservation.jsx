import ParkingLayout from "../../components/ParkingLayout";
import ReservationForm from "../../components/ReservationForm";

const Reservation = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
      <header className="h-16 bg-white shadow px-4 flex items-center">
        <Navbar />
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white border-r overflow-y-auto">
          <Sidebar />
        </aside>
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <div className="grid grid-cols-[2fr_1fr] gap-6 h-full">
            <ParkingLayout />
            <ReservationForm />
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default Reservation
