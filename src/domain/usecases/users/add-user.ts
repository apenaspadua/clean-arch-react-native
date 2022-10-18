import { HttpResponse } from "../../../application/protocols/http";
import { AddFunction } from "../../common/types";


export interface AddUser extends AddFunction<HttpResponse<AddNewUserNamespace.Model>, AddNewUserNamespace.Params> {}

export namespace AddNewUserNamespace {
    export type Params = {
        name: string,
        username?: string,
        email: string,
        contact?: string
        phone?: string,
    }

    export type Model = Params;

}