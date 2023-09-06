import { IUserRequest } from "./types/users";

const baseUrl = 'https://reqres.in/api';

export const getAllUsers = async (): Promise<IUserRequest> => {
  const res = await fetch(`${baseUrl}/users`);
  const todos = await res.json();
  return todos;
}
