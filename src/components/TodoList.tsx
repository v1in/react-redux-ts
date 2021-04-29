import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(
        (state) => state.todo
    );
    const { fetchTodos, setTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        return <h2>Loading...</h2>;
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
            <h2>
                <ins>Todos:</ins>
            </h2>
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
                        style={{ margin: 5, background: p === page ? "yellow" : "" }}>
                        {p}
                    </button>
                ))}
            </div>
        </>
    );
};

export default TodoList;
