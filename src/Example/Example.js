import React, { useState } from 'react';

const Example = () => {
  // Khởi tạo state
  // const [nameState, setNameState] = useState(value)

  const [name, setName] = useState('Nguyễn AB');
  const [age, setAge] = useState(20);
  //   name: tên state,
  // setName: hàm để thay đổi giá trị state
  //   "Nguyễn AB": giá trị khởi tạo ban đầu của state

  const handleChangeValue = () => {
    setName('Test');
    setAge(25);
  };

  console.log('Mỗi lần render thì sẽ chạy lại cái này');

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={handleChangeValue}>Change value</button>
    </div>
  );
};

export default Example;
