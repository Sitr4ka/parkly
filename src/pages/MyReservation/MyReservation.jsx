import Sidebar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import ReservationList from '../../components/MyReservation/ReservationList';
const MyReservation = () => {
  return (
    <>
      {/*  */}
      <div className="h-screen flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-64 bg-white border-gray-400 overflow-hidden">
            <Sidebar />
          </aside>

          <div className="flex-1 bg-gray-100">
            <header className="h-16 bg-white shadow px-4 flex items-center">
              <Navbar />
            </header>
            <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
              <ReservationList />
            </main>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};
export default MyReservation;
