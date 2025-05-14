import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Reservation from './pages/reservation/Reservation';
import TestParking from './components/TestParking';
import MyReservation from './pages/MyReservation/MyReservation';
import Booking from './pages/booking/Booking';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ParkingList from './pages/parkings/ParkingList';
import Test from './components/Test';
import Gridtest from './components/Gridtest';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/myReservation" element={<MyReservation />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/parkings" element={<ParkingList />} />
           <Route path="/parkings/:id" element={<Reservation />} />
          <Route path="/test1" element={<Gridtest />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
