// Controls.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({ date, onDateChange, from, onFromChange, to, onToChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
      {/* Date input */}
      <div className="flex flex-col">
        <label htmlFor="filter-date" className="text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          id="filter-date"
          type="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="p-2 border rounded-lg text-sm"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="filter-from" className="text-sm font-medium text-gray-700 mb-1">
          From
        </label>
        <input
          id="filter-from"
          type="time"
          value={from}
          onChange={(e) => onFromChange(e.target.value)}
          className="p-2 border rounded-lg text-sm"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="filter-to" className="text-sm font-medium text-gray-700 mb-1">
          To
        </label>
        <input
          id="filter-to"
          type="time"
          value={to}
          onChange={(e) => onToChange(e.target.value)}
          className="p-2 border rounded-lg text-sm"
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
