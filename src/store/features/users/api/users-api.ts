import { HttpResponse } from "../../../../application/protocols/http";
import { RemoteLoadUsers, RemoteAddUser } from "../../../../application/services/users"
import { AddNewUserNamespace } from "../../../../domain/usecases/users/add-user";
import { AxiosHttpClient } from "../../../../infra/http/axios-http-client/axios-http-client";

const axiosInstance = new AxiosHttpClient();

export const listAllUsers = async () => {
    const LoadUsersInstance = new RemoteLoadUsers("users", axiosInstance);
    return await LoadUsersInstance.load();
}

export const AddNewUser = async (params: AddNewUserNamespace.Params): Promise<HttpResponse<AddNewUserNamespace.Model>> => {
    const AddNewUserInstance = new RemoteAddUser("users", axiosInstance);
    return await AddNewUserInstance.add(params);
}