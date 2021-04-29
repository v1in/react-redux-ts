import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector((state) => state.user);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <pre><code>{error}</code></pre>;
    }

    return (
        <>
            <h2><ins>Users:</ins></h2>
            <blockquote>
                {users.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ))}
            </blockquote>
        </>
    );
};

export default UserList;
