import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Infocontainer from './components/Infocontainer';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <Dropdown onCountrySelect={handleCountrySelect} />
      <Infocontainer selectedCountry={selectedCountry} />
    </div>
  );
};

export default App;