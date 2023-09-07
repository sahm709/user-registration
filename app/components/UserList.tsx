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
            <td></td>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user, index) => (
            <User key={user.id} user={user} index={index}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
