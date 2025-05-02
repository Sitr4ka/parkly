<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SideBar from './components/SideBar';
import Reservation from './pages/reservation/Reservation';
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SideBar from "./components/SideBar";
import Reservation from "./pages/reservation/Reservation";
>>>>>>> dev
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/reservation" element={<Reservation />} />
=======
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/sidebar" element={<SideBar />}/>
          <Route path="/reservation" element={<Reservation />}/>
>>>>>>> dev
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
