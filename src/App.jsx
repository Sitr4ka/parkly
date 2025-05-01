import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/sidebar" element={<SideBar />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
