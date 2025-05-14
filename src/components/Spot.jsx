// Spot.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function Spot({ id,code, status, selected, onToggle }) {
  const isDisabled = status === 'occupied';

  return (
   <button
      type="button"
      onClick={() => !isDisabled && onToggle(id)}
      disabled={isDisabled}
      className={`h-12 sm:h-14 px-3 rounded-xl flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300
        ${
          isDisabled
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : selected
              ? 'bg-green-600 text-white hover:bg-green-500'
              : 'bg-white text-gray-700 shadow-sm hover:shadow-md hover:bg-gray-50'
        }
        ${!isDisabled && 'hover:scale-[1.02] active:scale-95'}
      `}
    >
   {code}
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
