import React from 'react';

const Todo = ({ value, label, functionOnClick }) => {
  const handleConsoleLabel = () => {
    functionOnClick(label);
  };

  return (
    <div className="container__todo">
      <input type="radio" checked={value} />
      <label onClick={handleConsoleLabel}>{label}</label>
    </div>
  );
};

export default Todo;
