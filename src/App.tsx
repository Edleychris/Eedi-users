import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import { User } from './types/User';
import UserDetail from './components/UserDetail';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <h1>User List</h1>
     <div className='userlist'>
     <UserList onUserClick={handleUserClick} />
     {selectedUser && <UserDetail user={selectedUser} />}
     </div>
    </div>
  );
};

export default App;
