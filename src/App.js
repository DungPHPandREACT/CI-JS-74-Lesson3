import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import ChangeBackground from './Example/ChangeBackground';
import Example from './Example/Example';
import TodoList from './TodoList/TodoList';

const App = () => {
  const name = 'TEST';
  const age = 15;
  const gender = 'boy';

  return (
    // <div class="test">
    //   <Component1 />
    //   <Component2 name={name} age={age} gender={gender} />
    // </div>
    // <TodoList />
    // <Example />
    <ChangeBackground />
  );
};

export default App;
