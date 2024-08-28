import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Danh Sách Người Dùng</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
            <h2 style={{ margin: '0 0 10px' }}>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p>
              <strong>Địa chỉ:</strong> {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;