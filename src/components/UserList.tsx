import { useEffect, type FC } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Loading } from "./Loading";

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <samp>Users:</samp>
      </h3>
      <blockquote>
        {users.map((user) => (
          <div key={user.id}>
            <b>{user.name}</b> — <small>{user.email}</small>
          </div>
        ))}
      </blockquote>
    </>
  );
};

export default UserList;
