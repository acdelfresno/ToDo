import { createElement } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {

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
    

  );


};



