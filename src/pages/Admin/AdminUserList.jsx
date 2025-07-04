import React from 'react';
import './admin.css';

export const users = [
 
  {
    id: 3,
    name: 'Charlie Singh',
    role: 'Faculty',
    status: 'Active',
    username: 'charlie.faculty',
    password: 'Charlie@123',
  },
 
];

const AdminUserList = () => {
  return (
    <div className="admin-container">
      <h2 className="title">Admin User List</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserList;
