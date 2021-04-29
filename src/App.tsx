import React from "react";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <h1><samp><mark>Redux, React, Typescript, Axios, Redux-Thunk</mark></samp></h1>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
};

export default App;
