import { IUser } from '@/types/users';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import React from 'react'
import Image from 'next/image';

interface TaskProps {
    user: IUser;
    index: number;
  }

const User: React.FC<TaskProps> = ({ user, index }) => {
  return (
    <tr key={user.id}>
      <td>{index + 1}</td>
      <td>
      <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.avatar} alt="avatar image"/>
              </div>
            </div>
          </div>
      </td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
    </tr>
  )
}

export default User