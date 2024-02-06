import React from 'react';

const InfoContainer = ({ selectedCountry }) => {
  return (
    <div>
      <h1>Country Information</h1>
      {selectedCountry && (
        <div>
          Selected Country: {selectedCountry}
        </div>
      )}
    </div>
  );
};

export default InfoContainer;