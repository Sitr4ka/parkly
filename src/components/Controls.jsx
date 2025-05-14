// Controls.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({ date, onDateChange, from, onFromChange, to, onToChange }) {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Date</label>
        <input
          type="date"
          value={date}
          onChange={e => onDateChange(e.target.value)}
          className="w-full p-1.5 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Heure de début</label>
        <input
          type="time"
          value={from}
          onChange={e => onFromChange(e.target.value)}
          className="w-full p-1.5 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Heure de fin</label>
        <input
          type="time"
          value={to}
          onChange={e => onToChange(e.target.value)}
          className="w-full p-1.5 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}

Controls.propTypes = {
  date: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  onFromChange: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  onToChange: PropTypes.func.isRequired,
};
