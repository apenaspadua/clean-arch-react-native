import { AddUser, AddNewUserNamespace } from "../../../../domain/usecases/users/add-user";
import { HttpClient, HttpResponse } from "../../../protocols/http";
import { makeApiUrl } from "../../../../ioc/helpers";


export class RemoteAddUser implements AddUser {
    constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

    async add(params: AddNewUserNamespace.Params): Promise<HttpResponse<AddNewUserNamespace.Model>> {
        const httpResponse = await this.httpClient.request({
            method: 'post',
            body: params,
            url: `${makeApiUrl(this.url)}`
        })

        return httpResponse;
    }
}