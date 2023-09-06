import { IUserRequest } from "@/types/users";
import React from "react";
import User from "./User";

interface TodoListProps {
  users: IUserRequest;
}

const TodoList: React.FC<TodoListProps> = ({ users }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
