import React, { useState, useCallback, useEffect } from 'react';

export default function B5() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== '') {
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      setNewTodo('');
    }
  }, [newTodo, todos]);
  const handleInputChange = useCallback((e:any) => {
    setNewTodo(e.target.value);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Bài 5/ 38</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Thêm</button>
      </div>
      <ul>
        {todos.map((todo:any, index:any) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
