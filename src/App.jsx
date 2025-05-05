import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SideBar from './components/SideBar';
import Reservation from './pages/reservation/Reservation';
import TestParking from './components/TestParking';
import MyReservation from "./pages/MyReservation/MyReservation"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/test" element={<TestParking />} />      
          <Route path="/MyReservation" element={<MyReservation />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
