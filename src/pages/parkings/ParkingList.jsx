
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/SideBar';
import Gridtest from '../../components/Gridtest';

export default function ParkingList() {
  
  return (
    <div className="h-screen flex flex-col">
      <header className="h-16 shadow flex items-center fixed w-full z-10 ">
        <Navbar />
      </header>
    <div className="pt-16 flex flex-1 h-full">
    
    <aside className="w-16 sm:w-20 md:w-24 lg:w-64 overflow-hidden ">
      <Sidebar />
    </aside>
    <main className="flex-1 overflow-y-auto p-4">
      <Gridtest />
    </main>
  </div>
</div>

  );
}
