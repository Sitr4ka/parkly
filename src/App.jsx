import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import NewReservationPage from "./pages/dashboard/NewReservationPage";
import MyReservationPage from "./pages/dashboard/MyReservationPage";
import Dashboard from "./pages/dashboard/Dashboard";
import SlotPage from "./pages/dashboard/SlotPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="reservation" element={<NewReservationPage />}/>
            <Route path="reservation-list" element={<MyReservationPage />}/>
            <Route path="slot" element={<SlotPage />}/>
          </Route>
          <Route path="/auth/signUp" element={<SignUp/>}/>
          <Route path="/auth/signIn" element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
