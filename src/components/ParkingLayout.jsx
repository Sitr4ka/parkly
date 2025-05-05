// ParkingLayout.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spot from './Spot';
import Controls from './Controls';

const ROWS = 4;
const COLS = 6;
const SPOTS_PER_PAGE = ROWS * COLS;

/**
 * Utility: convert "HH:MM" to minutes since midnight
 */
function timeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * Filter spots by date/time interval based on each spot.bookings
 * Each spot can have a `bookings` array: [{ date: 'YYYY-MM-DD', from: 'HH:MM', to: 'HH:MM' }, ...]
 */
function filterSpotsByInterval(spots, date, from, to) {
  const fromMin = timeToMinutes(from);
  const toMin = timeToMinutes(to);

  return spots.map(spot => {
    if (!Array.isArray(spot.bookings)) {
      // Pas de bookings : considéré comme libre
      return { ...spot, status: 'free' };
    }

    const occupied = spot.bookings.some(({ date: d, from: f, to: t }) => {
      if (d !== date) return false;
      const start = timeToMinutes(f);
      const end = timeToMinutes(t);
      // overlap if start < toMin && end > fromMin
      return start < toMin && end > fromMin;
    });

    return {
      ...spot,
      status: occupied ? 'occupied' : 'free',
    };
  });
}

/**
 * ParkingLayout component with controls, pagination, and dynamic status.
 * Props:
 * - spots: Array of { id: string, status: "free" | "occupied", bookings?: [{date, from, to}] }
 */
export default function ParkingLayout({ spots: initialSpots, onSelect }) {
  const [date, setDate] = useState(() => new Date().toLocaleDateString('fr-CA').slice(0, 10));
  const [fromTime, setFromTime] = useState('08:00');
  const [toTime, setToTime] = useState('09:00');
  const [filteredSpots, setFilteredSpots] = useState(initialSpots);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(new Set());

  const totalPages = Math.ceil(filteredSpots.length / SPOTS_PER_PAGE);

  useEffect(() => {
    const result = filterSpotsByInterval(initialSpots, date, fromTime, toTime);
    setFilteredSpots(result);
    setPage(0);
  }, [initialSpots, date, fromTime, toTime]);

  const handleToggle = id => {
    setSelected(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
        if (onSelect) {
          onSelect({
            id,
            date,
            from: fromTime,
            to: toTime,
          });
        }
      }
      return newSelected;
    });
  };

  const start = page * SPOTS_PER_PAGE;
  const pageSpots = filteredSpots.slice(start, start + SPOTS_PER_PAGE);

  return (
    <section className="flex-1 p-4 sm:p-6 bg-gray-100 overflow-hidden">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col h-full">
        <Controls
          date={date}
          onDateChange={setDate}
          from={fromTime}
          onFromChange={setFromTime}
          to={toTime}
          onToChange={setToTime}
        />

        <div className="flex-1 flex flex-col pt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 flex-1 overflow-auto">
            {pageSpots.map(spot => (
              <Spot
                key={spot.id}
                id={spot.id}
                status={spot.status}
                selected={selected.has(spot.id)}
                onToggle={handleToggle}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage(p => Math.max(p - 1, 0))}
              disabled={page === 0}
              className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            <span className="text-sm">Page {page + 1} of {totalPages}</span>
            <button
              onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
              disabled={page === totalPages - 1}
              className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

ParkingLayout.propTypes = {
  spots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['free', 'occupied']).isRequired,
      bookings: PropTypes.arrayOf(
        PropTypes.shape({ date: PropTypes.string, from: PropTypes.string, to: PropTypes.string })
      ),
    })
  ).isRequired,
  onSelect: PropTypes.func,
};
