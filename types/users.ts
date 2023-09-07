export interface IUserRequest {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IUser[],
}

export interface IUser {
  id: string,
  email: string,
  first_name: string,
  last_name: string,
  avatar:string,
}

export interface IUserPost {
  email: string,
  password: string,
}
