import React from 'react';
import { User } from '../types/User';

interface UserDetailProps {
  user: User;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  return (
    <div className="user-details">
      <h2>{user.name}'s Details</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserDetail;
