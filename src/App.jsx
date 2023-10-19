import { NewTodo } from "./newTodoForm"
import "./styles.css"
import React, { useState } from 'react'
import { TodoList } from "./todoList"

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), title, completed: false
        }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodos(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodo onSubmit={addTodo}/>
      <h1 className="header">
        TODO LIST
      </h1>
      <TodoList  todos={ todos } toggleTodo={toggleTodo} deleteTodo={deleteTodos}/>
    </>
  );
}