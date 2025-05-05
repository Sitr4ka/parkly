import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SideBar from "./components/SideBar";
import Reservation from "./pages/reservation/Reservation";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/parking" element={<SideBar />}/>
          <Route path="/reservation" element={<Reservation />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
