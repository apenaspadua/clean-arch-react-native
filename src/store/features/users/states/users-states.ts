import create from 'zustand'
import { UserModel } from '../../../../domain/models'
import { HttpStatusCode } from '../../../../application/protocols/http';
import { listAllUsers, AddNewUser } from '../api/users-api';
import { AddNewUserNamespace } from '../../../../domain/usecases/users/add-user';


interface UsersState {
  users: UserModel[],
  setAllUsers: () => void,
  addNewUser: (params: AddNewUserNamespace.Params) => void
} 

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  setAllUsers: async () => {
    const response = await listAllUsers();
    if(response.statusCode === HttpStatusCode.ok) {
      set(state => ({users: response.body}))
    }
  },
  addNewUser: async (params: AddNewUserNamespace.Params) => {
    await AddNewUser(params);
  },
}))
