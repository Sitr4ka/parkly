// Spot.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function Spot({ id, status, selected, onToggle }) {
  const isDisabled = status === 'occupied';

  return (
    <button
      type="button"
      onClick={() => !isDisabled && onToggle(id)}
      disabled={isDisabled}
      className={`h-10 rounded-2xl flex items-center justify-center text-sm sm:text-base transition
      ${
        isDisabled
          ? 'bg-gray-400 text-white cursor-not-allowed'
          : selected
            ? 'bg-green-500 text-white cursor-pointer hover:opacity-90'
            : 'bg-white text-gray-800 border cursor-pointer hover:bg-gray-100'
      }
    `}
    >
      {id}
    </button>
  );
}

Spot.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['free', 'occupied']).isRequired,
  selected: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

Spot.defaultProps = {
  selected: false,
};
