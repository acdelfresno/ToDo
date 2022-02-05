import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { v4 as uuidv4 } from "uuid";

import { InputTodo } from "./InputTodo";

export const Layout = () => {

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() =>{
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  const getInitialTodos = () => {
    const temp = JSON.stringify(todos);
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];    
  };

  const handleChange = id => {
    setTodos(prevState => prevState.Map(($) => {
      if ($.id === id){
        return {
          ...$, completed: !$.completed
        }
      }
    }));
  };

  const delTodo = id => {
    setTodos([
      ...todos.filter($ => {
        return $.id !== id
      }),
    ])
  };

  const addTodoItem = (title) => {ç
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }; 

  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.Map( $ => {
        if ($.id === id){
          $.title = updatedTitle;
        } 
        return $;
      })
    )
  };

  return (

    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList 
                todos={todos} 
                handleChangeProps={handleChange} 
                deleteTodoProps={delTodo}
                setUpdate ={setUpdate} 
              />
            </div>
          </div>
        </Route>
        <Route >
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );

};



