import { useEffect, useState } from "react";
import { getUsers } from "../services/userApi";

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user._id}>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Users;