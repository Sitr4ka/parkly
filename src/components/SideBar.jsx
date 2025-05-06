import { NavLink } from 'react-router-dom';

const SideBar = ({ isActive = false }) => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-3xl font-bold text-blue-600 px-6 py-6">Parkly.</h1>
        </div>
        <nav className="flex flex-col space-y-2 px-6">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-700 bg-blue-300 rounded px-4 py-2' : 'rounded px-4 py-2'
            }
            to="/booking"
          >
            Booking
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-700 bg-blue-300 rounded px-4 py-2' : 'rounded px-4 py-2'
            }
            to="/reservation"
          >
            Nouveau
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-700 bg-blue-300 rounded px-4 py-2' : 'rounded px-4 py-2'
            }
            to="/myReservation"
          >
            Mes réservations
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-700 bg-blue-300 rounded px-4 py-2' : 'rounded px-4 py-2'
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
