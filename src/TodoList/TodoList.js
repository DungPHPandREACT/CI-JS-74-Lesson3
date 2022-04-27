import React from 'react';
import Todo from './components/Todo';

const TodoList = () => {
  const todoList = [
    { value: false, label: 'Clean up bedroom' },
    { value: true, label: 'Buy some milk' },
    { value: true, label: 'Jogging' },
    { value: false, label: 'Learn React' },
    { value: false, label: 'Doing Exerciese' },
  ];

  const todoListUnfinished = todoList.filter((e) => e.value !== true);

  const handleTestOnClick = (label) => {
    console.log(label);
  };

  return (
    <div className="container">
      <input type="text" placeholder="Enter your task here" />
      {todoList.map((e, i) => (
        <Todo
          value={e.value}
          label={e.label}
          functionOnClick={handleTestOnClick}
        />
      ))}

      <label>{todoListUnfinished.length} tasks left</label>
    </div>
  );
};

export default TodoList;
