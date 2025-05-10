import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Reservation from './pages/reservation/Reservation';
import TestParking from './components/TestParking';
import MyReservation from './pages/MyReservation/MyReservation';
import Booking from './pages/booking/Booking';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/test" element={<TestParking />} />
          <Route path="/myReservation" element={<MyReservation />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
