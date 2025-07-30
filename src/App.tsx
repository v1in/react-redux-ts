import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

const App = () => {
  return (
    <>
      <h2>
        <samp>
          <mark>Redux, Redux-Toolkit, React, Typescript, Axios</mark>
        </samp>
      </h2>
      <UserList />
      <hr />
      <TodoList />
    </>
  );
};

export default App;
