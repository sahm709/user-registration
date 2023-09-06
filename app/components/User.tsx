import { IUser } from '@/types/users';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import React from 'react'

interface TaskProps {
    user: IUser;
  }

const User: React.FC<TaskProps> = ({ user }) => {
  return (
    <tr key={user.id}>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td className='flex gap-5'>
        <FiEdit
          cursor='pointer'
          className='text-blue-500'
          size={25}
        />
        <FiTrash2
          cursor='pointer'
          className='text-red-500'
          size={25}
        />
        </td>
    </tr>
  )
}

export default User