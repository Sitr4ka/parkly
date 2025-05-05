import ParkingLayout from "../../components/ParkingLayout";
import ReservationForm from "../../components/forms/ReservationForm";
import Sidebar from "../../components/SideBar";
import Navbar from "../../components/Navbar";

const Reservation = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-64 bg-white border-r border-gray-400 overflow-hidden">
            <Sidebar />
          </aside>

          <div className="flex-1 bg-gray-100 overflow-y-auto">
            <header className="h-16 bg-white shadow px-4 flex items-center">
              <Navbar />
            </header>
            <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
              {/* à modifier */}
              <div className="grid grid-cols-[2fr_1fr] gap-6 h-full">
                <ParkingLayout />
                <ReservationForm />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
