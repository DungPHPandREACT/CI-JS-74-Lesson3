import React, { useState } from 'react';

const ChangeBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState('red');

  const handleChangeBackgroundColor = () => {
    setBackgroundColor('black');
  };

  return (
    <div
      onClick={handleChangeBackgroundColor}
      style={{ height: '400px', width: '400px', background: backgroundColor }}
    >
      ChangeBackground
    </div>
  );
};

export default ChangeBackground;
