import Sidebar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
 import ReservationList from "../../components/MyReservation/ReservationList"
 const MyReservation=()=>{
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
            <ReservationList />

          </div>
        </div>
        </>
      );
}
export default MyReservation