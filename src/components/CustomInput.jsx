import React from 'react';

const CustomInput = ({ label, type, name, placeholder }) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700 block mb-2.5">
          {label}
        </label>
      )}

      <input
        className="border w-[240px] rounded-[8px] h-11 px-5 py-4 mb-4"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      <br />
    </>
  );
};

CustomInput.propTypes = {};

export default CustomInput;
