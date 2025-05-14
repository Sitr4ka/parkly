// ParkingLayout.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spot from './Spot';
import Controls from './Controls';
import { useParams } from 'react-router-dom';
import { fetchAllSpots } from '../api/spotApi'; 

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
 */
function filterSpotsByInterval(spots, date, from, to) {
  const fromMin = timeToMinutes(from);
  const toMin = timeToMinutes(to);

  return spots.map((spot) => {
    if (!Array.isArray(spot.bookings)) {
      return { ...spot, status: 'free' };
    }

    const occupied = spot.bookings.some(({ date: d, from: f, to: t }) => {
      if (d !== date) return false;
      const start = timeToMinutes(f);
      const end = timeToMinutes(t);
      return start < toMin && end > fromMin;
    });

    return {
      ...spot,
      status: occupied ? 'occupied' : 'free',
    };
  });
}

export default function ParkingLayout({ onSelect }) {
  const { id } = useParams();
  console.log(id);
  

  const [date, setDate] = useState(() => new Date().toLocaleDateString('fr-CA').slice(0, 10));
  const [fromTime, setFromTime] = useState('08:00');
  const [toTime, setToTime] = useState('09:00');

  const [allSpots, setAllSpots] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(new Set());

  const totalPages = Math.ceil(filteredSpots.length / SPOTS_PER_PAGE);

  // Charger les spots depuis le backend
  useEffect(() => {
    async function loadSpots() {
      try {
        const data = await fetchAllSpots(id);
        setAllSpots(data);
      } catch (error) {
        console.error('Erreur lors du chargement des spots:', error);
      }
    }

    if (id) {
      loadSpots();
    }
  }, [id]);

  // Filtrer les spots selon la date / heure
  useEffect(() => {
    const result = filterSpotsByInterval(allSpots, date, fromTime, toTime);
    setFilteredSpots(result);
    setPage(0);
  }, [allSpots, date, fromTime, toTime]);

  const handleToggle = (id) => {
    setSelected((prev) => {
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

        <div className="flex-1 flex items-center justify-center overflow-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 bg-gray-50 p-3 rounded-2xl">
            {pageSpots.map(spot => (
              <Spot
                key={spot.id}
                id={spot.id}
                code={spot.code}
                status={spot.status}
                selected={selected.has(spot.id)}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 w-full">
          <button
            onClick={() => setPage(p => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            &larr; Précédent
          </button>
          <span className="text-sm text-gray-600">
            Page <span className="font-semibold">{page + 1}</span> sur <span className="font-semibold">{totalPages}</span>
          </span>
          <button
            onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            Suivant &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

ParkingLayout.propTypes = {
  onSelect: PropTypes.func,
};
