import { useEffect, type FC } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Loading } from "./Loading";

const TodoList: FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todo
  );

  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <pre>
        <code>{error}</code>
      </pre>
    );
  }

  return (
    <>
      <h3>
        <samp>Todos:</samp>
      </h3>
      <blockquote>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        ))}
      </blockquote>
      <div>
        {pages.map((p) => (
          <button
            key={`id-${p}`}
            onClick={() => setTodoPage(p)}
            style={{ margin: 5, background: p === page ? "yellow" : "" }}
          >
            {p}
          </button>
        ))}
      </div>
    </>
  );
};

export default TodoList;
