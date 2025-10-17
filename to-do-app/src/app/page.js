"use client";
import React, { useState } from "react";

function TodoItem({ todo, index, toggleTodo }) {
  return (
    <li style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(index)} 
        style={{ marginRight: "10px", width: "18px", height: "18px", cursor: "pointer" }} 
      />
      <span 
        style={{ 
          textDecoration: todo.completed ? "line-through" : "none", 
          fontFamily: "serif", 
          color: "black" 
        }}
      >
        {todo.text}
      </span>
    </li>
  );
}

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = { text: inputValue.trim(), completed: false };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  };

  return (
    <div style={{ minHeight: "100vh", background: "white", color: "black", padding: "30px" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "serif", fontWeight: "900", fontSize: "36px", marginBottom: "20px" }}>
          Todo List App
        </h1>

        <div style={{ display: "flex", marginBottom: "15px", alignItems: "stretch" }}>
          <input
            type="text"
            placeholder="Enter a new task.."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            style={{ 
              padding: "8px", 
              fontSize: "14px", 
              flexGrow: 1, 
              border: "1px solid black", 
              background: "white", 
              color: "black", 
              outline: "none" 
            }}
          />
          <button
            onClick={addTodo}
            style={{ 
              padding: "8px 12px", 
              fontSize: "14px", 
              marginLeft: "0px", 
              border: "1px solid black", 
              background: "white", 
              color: "black", 
              cursor: "pointer", 
              fontWeight: "normal" 
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyleType: "disc", paddingLeft: "15px" }}>
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
