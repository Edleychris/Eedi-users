import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/User';

interface UserListProps {
  onUserClick: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ onUserClick }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => onUserClick(user)}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
