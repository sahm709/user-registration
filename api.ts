import { IUserPost, IUserRequest } from "./types/users";

const baseUrl = 'https://reqres.in/api';

export const getAllUsers = async (): Promise<IUserRequest> => {
  const res = await fetch(`${baseUrl}/users`);
  const todos = await res.json();
  return todos;
}

export const addUser = async (todo: IUserPost): Promise<number> => {
  const res = await fetch(`${baseUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  return res.status;
}
