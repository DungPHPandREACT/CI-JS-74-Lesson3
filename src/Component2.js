import React from 'react';
import './component.scss';

const Component2 = ({ name, age, gender }) => {
  //   const { name, age, gender } = props;

  return (
    <div className="info" style={{ marginTop: '15px', paddingLeft: '20px' }}>
      <p className="info__name">Name: {name}</p>
      <p className="info__age">Age: {age}</p>
      <p className="info__gender">Gender: {gender}</p>
    </div>
  );
};

export default Component2;
