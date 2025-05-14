import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import NewReservationPage from "./pages/dashboard/NewReservationPage";
import MyReservationPage from "./pages/dashboard/MyReservationPage";
import Dashboard from "./pages/dashboard/Dashboard";
import SpotPage from "./pages/dashboard/SpotPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="reservation" element={<NewReservationPage />} />
            <Route path="reservation-list" element={<MyReservationPage />} />
            <Route path="spot" element={<SpotPage />} />
          </Route>
          <Route path="/auth">
            <Route path="signUp" element={<SignUp />} />
            <Route path="signIn" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
