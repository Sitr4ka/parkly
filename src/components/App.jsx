import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewReservation from "../pages/dashboard/NewReservation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard/reservation" element={<NewReservation />}/>
          <Route path="/dashboard/reservationList" element={<NewReservation />}/>
          {/* <Route path="/auth/signUp" element={<SignUp />}/> */}
          {/* <Route path="/auth/signIn" element={<SignUp />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
